import React from "react";
import readingTime from "reading-time";
import Layout from "../../components/Layout";

// mdx plugins
import Head from "next/head";
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
      <Head>
        {/* put the title, description, and ogImage in the head  */}
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
        <meta property="og:image" content={frontMatter.ogImage} />
      </Head>
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
