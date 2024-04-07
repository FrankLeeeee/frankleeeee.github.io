import Github from "../components/Github";
import Techstack from "../components/Techstack";
import Aboutcard from "../components/AboutCard";
import Layout from "../components/Layout";
import Section from "../components/Section";

function About() {
  return (
    <Layout>
      <div>
        <div className="flex flex-col">
          <div className="flex flex-col md:justify-between md:flex-row flex-wrap">
            <Aboutcard />
            <img
              src="/assets/about.png"
              alt="about"
              className="my-8 md:mt-0 object-scale-down max-h-48 md:max-h-64 lg:max-h-96"
            />
          </div>
        </div>

        <Section title="Skills">
          <Techstack />
        </Section>

        <Section title="GitHub">
          <Github />
        </Section>
      </div>
    </Layout>
  );
}

export default About;
