import React from "react";
import PublicationList from "../components/PublicationList";
import Layout from "../components/Layout";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Publications() {
  const googleScholarURL =
    "https://scholar.google.com/citations?user=XuwmCz4AAAAJ&hl=en";

  return (
    <Layout>
      <div className="flex justify-center">
        <PublicationList />
      </div>
      <div className="flex w-full justify-center text-center text-white mt-8">
        <a
          href={googleScholarURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded bg-transparent border-white text-white px-2 py-2 font-semibold ring-1 ring-inset ring-white"
        >
          <ArrowRightCircleIcon className="h-8 mr-2" />
          <span>View My Goold Scholars</span>
        </a>
      </div>
    </Layout>
  );
}
