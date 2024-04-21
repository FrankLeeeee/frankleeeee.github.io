const news = [
  {
    date: "2024-04",
    emoji: "🎉",
    text: () => (
      <span>
        was awarded the prestigious{" "}
        <a
          className="text-blue-400"
          href="https://www.a-star.edu.sg/Scholarships/for-graduate-studies/a-star-cis-scholarship"
          target="_blank"
          rel="noreferrer"
        >
          A*STAR Computing & Information Science Scholarship
        </a>
        , which will support my PhD studies at NTU.
      </span>
    ),
  },
  {
    date: "2024-03",
    emoji: "🎥",
    text: () => (
      <span>
        released{" "}
        <a
          className="text-blue-400"
          href="https://github.com/hpcaitech/Open-Sora"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-blue-400">the Open-Sora project V1&nbsp;</span>
        </a>
        <img
          src="https://img.shields.io/github/stars/hpcaitech/Open-Sora?style=social"
          alt="star-badge"
          className="inline"
        ></img>
        , congratulations to{" "}
        <a
          className="text-blue-400"
          href="https://zhengzangw.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          Zangwei Zheng
        </a>
        ,{" "}
        <a
          className="text-blue-400"
          href="https://github.com/xyupeng"
          target="_blank"
          rel="noreferrer"
        >
          Xiangyu Peng
        </a>
        ,{" "}
        <a
          className="text-blue-400"
          href="https://github.com/ver217"
          target="_blank"
          rel="noreferrer"
        >
          Hongxin Liu
        </a>{" "}
        and other collaborators and contributors!
      </span>
    ),
  },
  {
    date: "2024-03",
    emoji: "🎉",
    text: () => (
      <span>
        received an PhD offer from Nanyang Technological University. Will join{" "}
        <a
          className="text-blue-400"
          href="https://www.ntu.edu.sg/s-lab"
          target="_blank"
          rel="noreferrer"
        >
          NTU S-Lab
        </a>{" "}
        in August 2024 under supervision of{" "}
        <a
          className="text-blue-400"
          href="https://personal.ntu.edu.sg/tianwei.zhang/"
          target="_blank"
          rel="noreferrer"
        >
          Prof Zhang Tianwei.
        </a>
        .
      </span>
    ),
  },
  {
    date: "2024-01",
    emoji: "🚀",
    text: () => (
      <span>
        released{" "}
        <a
          className="text-blue-400"
          href="https://github.com/hpcaitech/SwiftInfer"
          target="_blank"
          rel="noreferrer"
        >
          SwiftInfer
        </a>
        &nbsp;
        <img
          src="https://img.shields.io/github/stars/hpcaitech/SwiftInfer?style=social"
          alt="star-badge"
          className="inline"
        ></img>
        , a TensorRT implementation of&nbsp;
        <a
          className="text-blue-400"
          href="https://github.com/mit-han-lab/streaming-llm"
          target="_blank"
          rel="noreferrer"
        >
          StreamingLLM
        </a>
        .
      </span>
    ),
  },
];

export default news;
