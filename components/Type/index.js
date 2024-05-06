import React from "react";
import { TypeAnimation } from "react-type-animation";

function Type() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Machine Learning",
        1000,
        "HPC",
        1000,
        "Open-Source",
        1000,
        "Full-stack",
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
