import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div>
      <blockquote className="text-white">
        <p className="text-left">
          Hi Everyone, I am <span className="gradient-color">Frank Lee </span>
          from 📍 Singapore.
          <br /> I graduated from Nanyang Technological University in 2021.
          <br /> I am interested in the intersection of software engineering and
          deep learning.
          <br /> I am participating in exciting projects such as &nbsp;
            <strong className="gradient-color">Colossal-AI </strong>.&nbsp;
            <img src="https://img.shields.io/github/stars/hpcaitech/ColossalAI?style=social" alt="star-badge" className="inline"></img>
          <br />
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">🕹 Playing Games</li>
          <li className="about-activity">💻 Writting Tech Blogs</li>
          <li className="about-activity">🏀 Sports</li>
        </ul>
      </blockquote>
    </div>
  );
}

export default AboutCard;
