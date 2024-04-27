import React from "react";
import ProjectList from "../ProjectList";
import projects from "../../data/projects";

function AboutCard() {
  return (
    <div className="text-slate-300">
      <blockquote>
        <p className="text-left">
          Hi Everyone, I am{" "}
          <strong className="gradient-color">Shenggui Li (Frank)</strong>. I am
          an incoming PhD student of the 📍 S-Lab in Nanyang Technological
          University @ Singapore, advised by Prof. Tianwei Zhang and Prof. Ivor
          Tsang. Prior to that, I obtained my 🤓 B.Eng in Computer Science in
          Nanyang Technological University in 2021 advised by Prof Chen Change
          Loy.
        </p>

        <p className="text-left mt-2">
          My interest lies at the intersection of 🤖 machine learning and ⚡️
          high performance computing. I first proposed the idea of sequence
          parallelism in 2021, which is now essential to large-scale model
          training. I am the author of Ring Self-Attention and ColossalAI.
          During my undergraduate study, I had the privilege to spend wonderful
          2 years on the NTU HPC Team and we won the overall 🥈 2nd place in the
          student cluster competition of ISC21.
        </p>
      </blockquote>

      <blockquote className="mt-2">
        I am involved in several interesting projects:
        <ProjectList data={projects} />
      </blockquote>
    </div>
  );
}

export default AboutCard;
