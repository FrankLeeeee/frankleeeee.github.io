import React from "react";
import Markdown from "react-markdown";

const Blog = ({ readingTime, title, description, date, ogImage, content }) => (
  <article className="prose mx-auto text-slate-400">
    <h1 className="text-4xl text-white font-bold">{title}</h1>
    <h4 className="text-sm text-slate-400">Published on {date}</h4>
    <h4 className="text-sm text-slate-400">Reading time: {readingTime}</h4>
    <h4 className="text-sm text-slate-400">Description: {description}</h4>
    <img src={ogImage.url} alt="blog" lazy="loa/ding" />
    <Markdown
      components={{
        h2: ({ children }) => <h2 className="text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="text-white">{children}</h3>,
        code: ({ children }) => <code className="text-white">{children}</code>,
        a: ({ children, href }) => (
          <a className="text-white" href={href}>
            {children}
          </a>
        ),
      }}
    >
      {content}
    </Markdown>
  </article>
);

export default Blog;
