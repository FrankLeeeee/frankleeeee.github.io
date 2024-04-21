import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";

export const contacts = [
  {
    url: "https://github.com/FrankLeeeee",
    icon: AiFillGithub,
  },
  {
    url: "https://scholar.google.com.sg/citations?user=XuwmCz4AAAAJ&hl=en",
    icon: SiGooglescholar,
  },
  {
    url: "https://sg.linkedin.com/in/shenggui-li",
    icon: FaLinkedinIn,
  },
  {
    url: "https://frankleeeee.medium.com/",
    icon: BsMedium,
  },
];

export const publications = [
  {
    category: "Efficient & Large Scale Machine Learning",
    items: [
      {
        name: "Colossal-AI: A Unified Deep Learning System For Large-Scale Parallel Training",
        authors: [
          "Shenggui Li",
          "Hongxin Liu",
          "Zhengda Bian",
          "Jiarui Fang",
          "Haichen Huang",
          "Yuliang Liu",
          "Boxiang Wang",
          "Yang You",
        ],
        url: "#",
        publisher:
          "Proceedings of the 2023 International Conference for Parallel Processing (ICPP 2023)",
      },
      {
        name: "Sequence Parallelism: Long Sequence Training from System Perspective",
        authors: [
          "Shenggui Li",
          "Fuzhao Xue",
          "Chaitanya Baranwal",
          "Yongbin Li",
          "Yang You",
        ],
        url: "https://aclanthology.org/2023.acl-long.134/",
        publisher:
          "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023)",
      },
      {
        name: "Parallel Training of Pre-Trained Models via Chunk-Based Dynamic Memory Management",
        authors: [
          "Jiarui Fang",
          "Zilin Zhu",
          "Shenggui Li",
          "Hui Su",
          "Yang Yu",
          "Jie Zhou",
          "Yang You",
        ],
        url: "https://ieeexplore.ieee.org/abstract/document/9940581",
        publisher:
          "IEEE Transactions on Parallel and Distributed Systems (TPDS 2023)",
      },
    ],
  },
  {
    category: "Cluster Scheduling",
    items: [
      {
        name: "Online evolutionary batch size orchestration for scheduling deep learning workloads in GPU clusters",
        authors: ["Zhengda Bian", "Shenggui Li", "Wei Wang", "Yang You"],
        url: "https://dl.acm.org/doi/abs/10.1145/3458817.3480859",
        publisher:
          "Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis (SC 2021)",
      },
    ],
  },
  {
    category: "Technical Reports",
    items: [
      {
        name: "Critique of” MemXCT: memory-centric X-ray CT reconstruction with massive parallelization” by SCC Team from Nanyang Technological University",
        authors: ["Shenggui Li", "Bu-Sung Lee"],
        url: "https://ieeexplore.ieee.org/abstract/document/9615005",
        publisher:
          "IEEE Transactions on Parallel and Distributed Systems (TPDS 2021)",
      },
    ],
  },
];
