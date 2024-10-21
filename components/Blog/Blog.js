import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkExternalLinks from "remark-external-links";
import { H2, H3, Link, ListItem, Code } from "./MdElements";

const Blog = ({ readingTime, title, description, date, ogImage, content }) => {
  return (
    <article className="prose mx-auto text-slate-400">
      <h1 className="text-4xl text-white font-bold">{title}</h1>
      <h4 className="text-sm text-slate-400">Published on {date}</h4>
      <h4 className="text-sm text-slate-400">Reading time: {readingTime}</h4>
      <h4 className="text-sm text-slate-400">Description: {description}</h4>
      <img src={ogImage.url} alt="blog" lazy="loa/ding" />
      {/* create a line break before the markdown content */}
      <hr className="rounded text-slate-400" />
      <Markdown
        className="text-justify"
        remarkPlugins={[remarkGfm, remarkSlug, remarkExternalLinks]}
        rehypePlugins={[rehypeAutolinkHeadings]}
        components={{
          h2: H2,
          h3: H3,
          a: Link,
          li: ListItem,
          code: Code,
        }}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default Blog;
