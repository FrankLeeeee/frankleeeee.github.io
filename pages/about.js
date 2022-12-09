import Github from "../components/Github";
import Techstack from "../components/Techstack";
import Aboutcard from "../components/AboutCard";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div>
        <div className="container mx-auto pt-12 md:pt-24 md:px-12 lg:pt-40 lg:px-24">
          <div className="flex flex-col justify-center md:flex-row md:justify-around flex-wrap">
            <div className="px-12">
              <Aboutcard />
            </div>

            <img
              src="/assets/about.png"
              alt="about"
              className="my-8 md:mt-0 object-scale-down max-h-48 md:max-h-72 lg:max-h-96"
            />
          </div>

          <div className="flex justify-center">
            <Techstack />
          </div>

          <div className="mt-5 flex flex-row justify-center pb-24">
            <Github />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
