import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import { H2, H3, H4, Link, ListItem, Code, Img } from "./MdElements";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  TelegramIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  RedditIcon,
  XIcon,
} from "react-share";

const Blog = ({
  readingTime,
  title,
  description,
  date,
  content,
  slug,
}) => {
  return (
    <article
      className="prose prose-slate dark:prose-invert prose-lg max-w-none min-w-0
        prose-headings:font-sans prose-headings:font-semibold prose-headings:scroll-mt-24
        prose-img:rounded-xl prose-img:shadow-sm prose-img:ring-1 prose-img:ring-slate-200/70 dark:prose-img:ring-slate-700/50
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-pre:rounded-none
        prose-code:before:content-none prose-code:after:content-none prose-code:font-normal"
    >
      <h1 className="mb-3 text-slate-900 dark:text-white font-bold tracking-tight">{title}</h1>
      <div className="not-prose mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
        <span>Published on {date}</span>
        <span aria-hidden="true">•</span>
        <span>{readingTime}</span>
      </div>
      <p className="not-prose mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {/* social media sharing buttons */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-400">Share to:</span>
        <TwitterShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-500 dark:text-slate-400"
        >
          <XIcon
            size={24}
            round={true}
            className="rounded-full border border-slate-300 dark:border-white"
          />
        </TwitterShareButton>
        <LinkedinShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-500 dark:text-slate-400"
        >
          <LinkedinIcon size={24} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-500 dark:text-slate-400"
        >
          <FacebookIcon size={24} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-500 dark:text-slate-400"
        >
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>
        <RedditShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-500 dark:text-slate-400"
        >
          <RedditIcon size={24} round={true} />
        </RedditShareButton>
        <TelegramShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-500 dark:text-slate-400"
        >
          <TelegramIcon size={24} round={true} />
        </TelegramShareButton>
      </div>

      {/* create a line break before the markdown content */}
      <hr className="rounded text-slate-300 dark:text-slate-400" />

      <Markdown
        className="text-left"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }]]}
        components={{
          h2: H2,
          h3: H3,
          h4: H4,
          a: Link,
          li: ListItem,
          code: Code,
          img: Img,
        }}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default Blog;
