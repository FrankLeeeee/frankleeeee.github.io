import React from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import { H2, H3, H4, Link, ListItem, Code } from "./MdElements";
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
  ogImage,
  content,
  slug,
}) => {
  return (
    <article
      className="prose prose-slate dark:prose-invert prose-lg max-w-none min-w-0 mx-auto
        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:scroll-mt-24
        prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-2
        prose-img:rounded-xl prose-img:shadow-sm
        prose-hr:border-slate-200 dark:prose-hr:border-slate-700
        prose-blockquote:border-l-4 prose-blockquote:border-l-blue-500 prose-blockquote:not-italic prose-blockquote:font-normal
        prose-pre:rounded-xl prose-pre:shadow-sm
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
      <Image src={ogImage.url} alt="blog cover" loading="lazy" width={860} height={484} className="w-full h-auto rounded-xl" />

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
        }}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default Blog;
