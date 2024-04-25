import Techstack from "../components/Techstack";
import Aboutcard from "../components/AboutCard";
import Layout from "../components/Layout";
import Section from "../components/Section";
import NewsList from "../components/NewsList";
import news from "../data/news";
import skills from "../data/skills";
import PublicationList from "../components/PublicationList";
import publications from "../data/publications";
import honours from "../data/honours";
import GoogleScholarButton from "../components/GoogleScholarButton";
import HonourList from "../components/HonourList";

function About() {
  return (
    <Layout>
      <div className="pb-12">
        <Section title="About Me">
          <div className="flex flex-col">
            <div className="flex flex-col lg:justify-between lg:flex-row">
              <Aboutcard />
              <img
                src="/assets/about.png"
                alt="about"
                className="my-8 md:mt-0 object-scale-down max-h-48 md:max-h-64 lg:max-h-96"
              />
            </div>
          </div>
        </Section>

        <Section title="News">
          <NewsList data={news} />
        </Section>

        <Section title="Selected Publications">
          <PublicationList data={publications} />
          <GoogleScholarButton url="https://scholar.google.com/citations?user=XuwmCz4AAAAJ&hl=en" />
        </Section>

        <Section title="Honours and Awards">
          <HonourList data={honours} />
        </Section>

        <Section title="Skills">
          <Techstack data={skills} />
        </Section>
      </div>
    </Layout>
  );
}

export default About;
