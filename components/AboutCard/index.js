import React from "react";
import ProjectList from "../ProjectList";
import { currentProjects, pastProjects } from "../../data/projects";

function AboutCard() {
  return (
    <div className="text-slate-400">
      <blockquote>
        <p className="text-justify">
          Hi, I am <strong className="gradient-color">Shenggui Li</strong>, you
          can call me <strong className="gradient-color">Frank Lee</strong> as
          well. I am a first-year PhD student at the Nanyang Technological
          University in Singapore, advised by{" "}
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
          . I am also affliated with{" "}
          <a
            className="text-blue-400"
            href="https://www.a-star.edu.sg/cfar"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-blue-400">
              Singapore A*STAR Center for Frontier AI Research (CFAR)
            </span>
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
          . I also worked as a founding member of a MLSys startup from 2022 to
          2024.
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
          </a>
          ,{" "}
          <a
            className="text-blue-400"
            href="https://dl.acm.org/doi/10.1145/3605573.3605613"
            target="_blank"
            rel="noreferrer"
          >
            Colossal-AI
          </a>{" "}
          and{" "}
          <a
            className="text-blue-400"
            href="https://github.com/hpcaitech/Open-Sora"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sora
          </a>
          . During my undergraduate study, I had the privilege to spend a
          wonderful year on the{" "}
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
        {" "}
        You can find my 📄 CV{" "}
        <a
          className="text-blue-400"
          href="/assets/cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </blockquote>
      <blockquote className="mt-2">
        I am currently working on builiding efficient systems for generative AI
        and write technical blogs sometimes. Feel free to contact me for
        collaboration.
      </blockquote>

      <blockquote className="mt-2">
        During my spare time, I am learning and contributing to open-source
        projects such as
        <ProjectList data={currentProjects} />
      </blockquote>

      <blockquote className="mt-2">
        I was previously involved in some interesting projects.
        <ProjectList data={pastProjects} />
      </blockquote>
    </div>
  );
}

export default AboutCard;
