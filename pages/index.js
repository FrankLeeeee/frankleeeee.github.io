import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Hello from "../components/Hello";

function App() {
  return (
    <Layout>
      <div id="home">
        <div className="container mx-auto pt-12 md:pt-24 md:px-12 lg:pt-40 lg:px-24">
          <div className="flex flex-col justify-start md:flex-row md:justify-between flex-wrap">
            <Hello />
            <img
              src="/assets/home-main.svg"
              alt="home pic"
              className="max-h-48 md:max-h-72 lg:max-h-96"
            />
          </div>
        </div>
        <div className="mt-8 p-12 mb-16">
          <Contact />
        </div>
      </div>
    </Layout>
  );
}

export default App;
