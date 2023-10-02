import React from "react";
import BlogItem from "../../components/Blog/BlogItem";
import api from "../../lib/lib";
import Layout from "../../components/Layout";
import GridLayout from "../../components/Blog/GridLayout";

export const getStaticProps = async () => {
  const blogs = api.getAllBlogs([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "excerpt",
    "timeReading",
    "ogImage",
    "content",
  ]);
  return {
    props: { blogs },
  };
};

// thoughts are personal blogs which are non-technical
const BlogList = ({ blogs }) => {
  return (
    <Layout>
      <GridLayout title="My Blogs">
        {blogs.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </GridLayout>
    </Layout>
  );
};

export default BlogList;
