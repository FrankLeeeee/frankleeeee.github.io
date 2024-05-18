import React from "react";
import BlogItem from "../../components/Blog/BlogItem";
import api from "../../lib/lib";
import Layout from "../../components/Layout";
import BlogList from "../../components/Blog/BlogList";
import Section from "../../components/Section";
import Fade from "../../components/Animations/Fade";

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
const BlogPage = ({ blogs }) => {
  return (
    <Layout>
      <Section title="My Blogs">
        <BlogList>
          {blogs.map((blog) => (
            <Fade key={blog.slug}>
              <BlogItem blog={blog} />
            </Fade>
          ))}
        </BlogList>
      </Section>
    </Layout>
  );
};

export default BlogPage;
