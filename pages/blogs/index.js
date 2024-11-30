import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BlogItem from "../../components/Blog/BlogItem";
import api from "../../lib/lib";
import Layout from "../../components/Layout";
import BlogList from "../../components/Blog/BlogList";
import Section from "../../components/Section";
import Fade from "../../components/Animations/Fade";
import Pagination from "../../components/Pagination/Pagination";

export const getStaticProps = async () => {
  const blogs = api.getAllBlogs([
    "slug",
    "title",
    "description",
    "date",
    "timeReading",
    "ogImage",
    "content",
    "tags",
  ]);
  const blogsPerPage = 8;
  const NumPages = Math.ceil(blogs.length / blogsPerPage);

  return {
    props: { blogs, blogsPerPage, NumPages },
  };
};

// thoughts are personal blogs which are non-technical
const BlogPage = ({ blogs, blogsPerPage, NumPages }) => {
  // get current page from query params
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const blogsToShow = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const goToPageByIndex = (index) => {
    router.push("/blogs?page=" + index);
  };

  return (
    <Layout>
      <Section title="My Blogs">
        <BlogList>
          {blogsToShow.map((blog) => (
            <Fade key={blog.slug}>
              <BlogItem blog={blog} />
            </Fade>
          ))}
        </BlogList>
      </Section>
      <Pagination
        currentPage={currentPage}
        NumPages={NumPages}
        goToPageByIndex={goToPageByIndex}
        siblingCount={5}
      />
    </Layout>
  );
};

export default BlogPage;
