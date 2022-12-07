import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div>
      <h1 className="text-white text-4xl pb-4">
        <a
          href="https://github.com/FrankLeeeee"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        | <strong>Code</strong>
      </h1>
      <div className="invisible md:visible p-4 text-white">
        <GitHubCalendar
          username="FrankLeeeee"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
      <div className="md:invisible p-4 text-white">
        <GitHubCalendar
          username="FrankLeeeee"
          blockSize={4}
          blockMargin={1}
          fontSize={12}
        />
      </div>
      
    </div>
  );
}

export default Github;
