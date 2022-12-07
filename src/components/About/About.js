import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <div>
      <div className="container mx-auto pt-12 md:pt-24 md:px-12 lg:pt-40 lg:px-24">
        <div className="flex flex-row justify-around flex-wrap">
          <div className="px-12">
            <Aboutcard />
          </div>

          <img src={laptopImg} alt="about" style={{ maxHeight: "350px" }} />
        </div>

        <div className="flex justify-center">
          <Techstack />
        </div>

        <div className="mt-5 flex flex-row justify-center">
          <Github />
        </div>
      </div>
    </div>
  );
}

export default About;
