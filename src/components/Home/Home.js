import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Contact from "./Contact";
import Type from "./Type";

function Home() {
  return (
    <section>
      <div id="home">
        <div className="container mx-auto pt-12 md:pt-24 md:px-12 lg:pt-40 lg:px-24">
          <div className="flex flex-row justify-between flex-wrap">
            <div className="pb-5">
              <h1 className="text-3xl pt-4 md:pt-12 lg:pt-24 pl-12 md:text-5xl text-white">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-3xl md:text-5xl pl-12 text-white">
                I'm
                <strong className="gradient-color"> Frank Lee</strong>
              </h1>
              <div className="leading-normal text-3xl md:text-5xl pl-12 mt-3 mb-5 font-extrabold text-left">
                <Type />
              </div>
            </div>

            <div className="mx-16 mt-32 md:m-12 lg:m-8 shrink">
              <img
                src={homeLogo}
                alt="home pic"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </section>
  );
}

export default Home;
