import React from "react";

const Blog = ({ readingTime, title, description, date, ogImage, content }) => (
  <div className="flex flex-col items-center justify-center text-slate-300 container max-w-3xl m-auto">
    <div className="flex flex-col space-y-2">
      <span className="text-2xl font-bold">{title}</span>
      <span className="text-sm text-slate-300">Published on {date}</span>
      <span className="text-sm text-slate-300">
        Reading time: {readingTime}
      </span>
      <span className="text-sm text-slate-300">{description}</span>
      <img src={ogImage.url} alt="blog" lazy="loading" />
    </div>

    {/* content */}
    <div className="mt-5 border-t-2 py-8 text-slate-400">{content}</div>
    <hr />
  </div>
);

export default Blog;
