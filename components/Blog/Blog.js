import React from "react";
import Markdown from "react-markdown";

const Blog = ({ readingTime, title, description, date, ogImage, content }) => (
  <div className="flex flex-col items-center justify-center text-slate-400 container max-w-3xl m-auto">
    <div className="flex flex-col space-y-2">
      <span className="text-4xl text-white font-bold">{title}</span>
      <span className="text-sm text-slate-400">Published on {date}</span>
      <span className="text-sm text-slate-400">
        Reading time: {readingTime}
      </span>
      <span className="text-sm text-slate-400">{description}</span>
      <img src={ogImage.url} alt="blog" lazy="loading" />
    </div>
    {/* content */}
    <div className="prose lg:prose-xl mt-5 border-t-2 py-8 text-slate-200">
      <Markdown
        components={{
          h2: ({ children }) => <h2 className="text-white">{children}</h2>,
          h3: ({ children }) => <h3 className="text-white">{children}</h3>,
          code: ({ children }) => (
            <code className="text-white">{children}</code>
          ),
          a: ({ children, href }) => (
            <a className="text-white" href={href}>
              {children}
            </a>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
    <hr />
  </div>
);

export default Blog;
