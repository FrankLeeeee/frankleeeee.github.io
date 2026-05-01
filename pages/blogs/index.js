import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import BlogItem from "../../components/Blog/BlogItem";
import api from "../../lib/lib";
import Layout from "../../components/Layout";
import BlogList from "../../components/Blog/BlogList";
import Section from "../../components/Section";
import Fade from "../../components/Animations/Fade";
import Pagination from "../../components/Pagination/Pagination";
import TagFilter from "../../components/Blog/TagFilter";

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
  const allTags = api.getAllTags();
  const blogsPerPage = 8;

  return {
    props: { blogs, allTags, blogsPerPage },
  };
};

const BlogPage = ({ blogs, allTags, blogsPerPage }) => {
  const router = useRouter();
  const currentPage = parseInt(router.query.page) || 1;
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredBlogs = useMemo(() => {
    if (!selectedTag) return blogs;
    return blogs.filter((blog) => blog.tags && blog.tags.includes(selectedTag));
  }, [blogs, selectedTag]);

  const NumPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const blogsToShow = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const goToPageByIndex = (index) => {
    router.push("/blogs?page=" + index);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
    if (currentPage !== 1) {
      router.push("/blogs?page=1");
    }
  };

  return (
    <Layout>
      <Section title="My Blogs">
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={handleTagSelect}
        />
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
