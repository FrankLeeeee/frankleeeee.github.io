import React from "react";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";

function Type() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Full-stack",
        1000,
        "ML Engineer",
        1000,
        "HPC Engineer",
        1000,
        "OSS Developer",
        1000,
      ]}
      wrapper="span"
      speed={300}
      className="font-extrabold gradient-color h-16"
      repeat={Infinity}
    />
  );
}

export default Type;
