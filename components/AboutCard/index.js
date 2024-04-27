import React from "react";
import ProjectList from "../ProjectList";
import projects from "../../data/projects";

function AboutCard() {
  return (
    <div className="text-slate-400">
      <blockquote>
        <p className="text-justify">
          Hi, I am <strong className="gradient-color">Shenggui Li</strong>, you
          can call me <strong className="gradient-color">Frank Lee</strong> as
          well. I am an incoming PhD student of the 📍
          <a
            className="text-blue-400"
            href="https://www.ntu.edu.sg/s-lab"
            target="_blank"
            rel="noreferrer"
          >
            S-Lab
          </a>{" "}
          in Nanyang Technological University @ Singapore, advised by{" "}
          <a
            className="text-blue-400"
            href="https://personal.ntu.edu.sg/tianwei.zhang/"
            target="_blank"
            rel="noreferrer"
          >
            Prof. Tianwei Zhang
          </a>{" "}
          and{" "}
          <a
            className="text-blue-400"
            href="https://www.a-star.edu.sg/cfar/about-cfar/management/prof-ivor-tsang"
            target="_blank"
            rel="noreferrer"
          >
            Prof. Ivor Tsang
          </a>
          . Prior to that, I obtained my 🤓 B.Eng in Computer Science in Nanyang
          Technological University in 2021 advised by{" "}
          <a
            className="text-blue-400"
            href="https://www.mmlab-ntu.com/person/ccloy/"
            target="_blank"
            rel="noreferrer"
          >
            Prof. Chen Change Loy
          </a>
          . I also worked with{" "}
          <a
            className="text-blue-400"
            href="https://www.comp.nus.edu.sg/~youy/"
            target="_blank"
            rel="noreferrer"
          >
            Prof. Yang You
          </a>{" "}
          from 2021 to 2024 as a research asssistant in the{" "}
          <a
            className="text-blue-400"
            href="https://ai.comp.nus.edu.sg/"
            target="_blank"
            rel="noreferrer"
          >
            HPC-AI Lab
          </a>{" "}
          and a founding member of{" "}
          <a
            className="text-blue-400"
            href="https://hpc-ai.com/"
            target="_blank"
            rel="noreferrer"
          >
            HPC-AI Technology
          </a>
          .
        </p>

        <p className="text-justify mt-2">
          My interest lies at the intersection of 🤖 machine learning and ⚡️
          high performance computing. I first proposed the concept of{" "}
          <a
            className="text-blue-400"
            href="https://aclanthology.org/2023.acl-long.134/"
            target="_blank"
            rel="noreferrer"
          >
            sequence parallelism
          </a>{" "}
          in 2021, which has attracted follow-ups and is widely adopted for
          large-scale model training. I am the author of{" "}
          <a
            className="text-blue-400"
            href="https://aclanthology.org/2023.acl-long.134/"
            target="_blank"
            rel="noreferrer"
          >
            Ring Self-Attention
          </a>{" "}
          and{" "}
          <a
            className="text-blue-400"
            href="https://dl.acm.org/doi/10.1145/3605573.3605613"
            target="_blank"
            rel="noreferrer"
          >
            Colossal-AI
          </a>
          . During my undergraduate study, I had the privilege to spend
          wonderful 2 years on the{" "}
          <a
            className="text-blue-400"
            href="https://ntuhpc.org/"
            target="_blank"
            rel="noreferrer"
          >
            NTU HPC Team
          </a>{" "}
          and we won the overall 🥈 2nd place in the student cluster competition
          of ISC21.
        </p>
      </blockquote>

      <blockquote className="mt-2">
        I am involved in several interesting projects, feel free to email me for
        collaboration.
        <ProjectList data={projects} />
      </blockquote>
    </div>
  );
}

export default AboutCard;
