import React from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Hello from "../components/Hello";
import contacts from "../data/contacts";
import Fade from "../components/Animations/Fade";

const RocketScene = dynamic(() => import("../components/RocketScene"), {
  ssr: false,
});

function App() {
  return (
    <Layout>
      <div id="home" className="mt-12">
        <div className="text-center">
          <div className="flex flex-col">
            <Fade>
              <Hello />
            </Fade>

            <RocketScene />
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
