import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Hello from "../components/Hello";
import contacts from "../data/contacts";
import Fade from "../components/Animations/Fade";

function App() {
  return (
    <Layout>
      <div id="home" className="mt-12">
        <div className="text-center">
          <div className="flex flex-col">
            <Fade>
              <Hello />
            </Fade>

            <img
              src="/assets/home-main.svg"
              alt="home pic"
              className="max-h-48 md:max-h-64 lg:max-h-80 mt-8"
            />
          </div>
        </div>
        <div className="mt-8 mb-16">
          <Contact data={contacts} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
