import React from "react";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import NavBar from "../../components/NavBar";
import Blog from "../../components/Blog/Blog";
import TableOfContents from "../../components/Blog/TableOfContents";
import api from "../../lib/lib";
import { NextSeo } from "next-seo";

function extractHeadings(content) {
  const slugger = new GithubSlugger();
  const headings = [];
  const re = /^(#{2,3})\s+(.+)$/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    const text = m[2]
      .trim()
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\*(.+?)\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .replace(/\[(.+?)\]\(.+?\)/g, "$1");
    headings.push({ level: m[1].length, text, id: slugger.slug(text) });
  }
  return headings;
}

export async function getStaticProps({ params }) {
  const { content, data } = api.getBlogContentBySlug(params.slug);
  const tags = data.tags ?? [];
  const headings = extractHeadings(content);
  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content).text,
      source: content,
      frontMatter: data,
      tags,
      headings,
    },
  };
}

export async function getStaticPaths() {
  const blogs = api.getAllBlogs(["slug"]);
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));
  return { paths, fallback: false };
}

const BlogPost = ({ readingTime, frontMatter, slug, source, headings }) => {
  return (
    <>
      <NavBar />
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://franklee.xyz/blogs/${slug}`}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.description,
          url: `https://franklee.xyz/blogs/${slug}`,
          site_name: "Shenggui Li",
          images: [{ url: frontMatter.ogImage.url, alt: frontMatter.title }],
        }}
      />
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-8 lg:px-12">
        <div className="xl:flex xl:gap-10 xl:items-start">
          <Blog
            readingTime={readingTime}
            title={frontMatter.title}
            description={frontMatter.description}
            date={frontMatter.date}
            content={source}
            ogImage={frontMatter.ogImage}
            slug={slug}
          />
          <aside className="hidden xl:block w-56 flex-shrink-0 sticky top-20 self-start">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
