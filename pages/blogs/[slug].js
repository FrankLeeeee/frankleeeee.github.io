import React from "react";
import readingTime from "reading-time";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/Layout";

// mdx plugins
import remarkAutolinkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkCodeTitles from "remark-code-titles";
import remarkCapitalize from "remark-capitalize";
import remarkExternalLinks from "remark-external-links";
import remarkImages from "remark-images";

import Blog from "../../components/Blog/Blog";
import api from "../../lib/lib";

export async function getStaticProps({ params }) {
  const { content, data } = api.getBlogContentBySlug(params.slug);

  // const mdxSource = await serialize(content, {
  //   mdxOptions: {
  //     remarkPlugins: [
  //       remarkAutolinkHeadings,
  //       remarkSlug,
  //       remarkCodeTitles,
  //       remarkCapitalize,
  //       remarkExternalLinks,
  //       remarkImages,
  //     ],
  //     rehypePlugins: [mdxPrism],
  //   },
  // });
  const tags = data.tags ?? [];
  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content).text,
      source: content,
      frontMatter: data,
      tags,
    },
  };
}

export async function getStaticPaths() {
  const blogs = api.getAllBlogs(["slug"]);
  const paths = blogs.map((blog) => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

const BlogPost = ({ readingTime, frontMatter, slug, source }) => {
  // const content = MDXRemote(source);

  return (
    <Layout>
      <Blog
        readingTime={readingTime}
        title={frontMatter.title}
        description={frontMatter.description}
        date={frontMatter.date}
        content={source}
        ogImage={frontMatter.ogImage}
        slug={slug}
      />
    </Layout>
  );
};

export default BlogPost;
