import React from "react";
import readingTime from "reading-time";
import Layout from "../../components/Layout";

// mdx plugins
import Blog from "../../components/Blog/Blog";
import api from "../../lib/lib";
import { NextSeo } from "next-seo";

export async function getStaticProps({ params }) {
  const { content, data } = api.getBlogContentBySlug(params.slug);
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
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://franklee.xyz/blogs/${slug}`}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.description,
          url: `https://franklee.xyz/blogs/${slug}`,
          site_name: "Shenggui Li",
          images: [{ url: frontMatter.ogImage }],
        }}
      />
      <div>
        <Blog
          readingTime={readingTime}
          title={frontMatter.title}
          description={frontMatter.description}
          date={frontMatter.date}
          content={source}
          ogImage={frontMatter.ogImage}
          slug={slug}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;
