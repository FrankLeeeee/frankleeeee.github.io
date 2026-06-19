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
      <div className="max-w-screen-2xl mx-auto py-8 px-4 sm:px-8 xl:px-0">
        <div className="xl:grid xl:grid-cols-[1fr_minmax(0,1024px)_1fr] xl:items-start">
          <div className="hidden xl:block" />
          <Blog
            readingTime={readingTime}
            title={frontMatter.title}
            description={frontMatter.description}
            date={frontMatter.date}
            content={source}
            slug={slug}
          />
          <div className="hidden xl:block xl:self-stretch">
            <div className="sticky top-0 h-screen flex items-center">
              <aside className="pl-10 overflow-y-auto max-h-[calc(100vh-8rem)]">
                <TableOfContents headings={headings} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
