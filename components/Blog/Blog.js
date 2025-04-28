import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkExternalLinks from "remark-external-links";
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
    <article className="prose mx-auto text-slate-400">
      <h1 className="text-4xl text-white font-bold">{title}</h1>
      <h4 className="text-sm text-slate-400">Published on {date}</h4>
      <h4 className="text-sm text-slate-400">Reading time: {readingTime}</h4>
      <h4 className="text-sm text-slate-400">Description: {description}</h4>
      <img src={ogImage.url} alt="blog" lazy="loa/ding" />

      {/* social media sharing buttons */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-400">Share to:</span>
        <TwitterShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-400"
        >
          <XIcon
            size={24}
            round={true}
            className="rounded-full border border-white"
          />
        </TwitterShareButton>
        <LinkedinShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-400"
        >
          <LinkedinIcon size={24} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-400"
        >
          <FacebookIcon size={24} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-400"
        >
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>
        <RedditShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-400"
        >
          <RedditIcon size={24} round={true} />
        </RedditShareButton>
        <TelegramShareButton
          url={`https://franklee.xyz/blogs/${slug}`}
          className="text-slate-400"
        >
          <TelegramIcon size={24} round={true} />
        </TelegramShareButton>
      </div>

      {/* create a line break before the markdown content */}
      <hr className="rounded text-slate-400" />

      <Markdown
        className="text-justify"
        remarkPlugins={[remarkGfm, remarkSlug, remarkExternalLinks]}
        rehypePlugins={[rehypeAutolinkHeadings]}
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
