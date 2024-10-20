import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkExternalLinks from "remark-external-links";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Blog = ({ readingTime, title, description, date, ogImage, content }) => (
  <article className="prose mx-auto text-slate-400">
    <h1 className="text-4xl text-white font-bold">{title}</h1>
    <h4 className="text-sm text-slate-400">Published on {date}</h4>
    <h4 className="text-sm text-slate-400">Reading time: {readingTime}</h4>
    <h4 className="text-sm text-slate-400">Description: {description}</h4>
    <img src={ogImage.url} alt="blog" lazy="loa/ding" />
    <Markdown
      className="text-justify"
      remarkPlugins={[remarkGfm, remarkSlug, remarkExternalLinks]}
      rehypePlugins={[rehypeAutolinkHeadings]}
      components={{
        h2: ({ children }) => <h2 className="text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="text-white">{children}</h3>,
        a: ({ children, href }) => (
          <a className="text-white" href={href}>
            {children}
          </a>
        ),
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={oneDark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  </article>
);

export default Blog;
