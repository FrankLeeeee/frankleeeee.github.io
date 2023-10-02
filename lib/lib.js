import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// get the path to the blog posts directory
const blogsDirectory = join(process.cwd(), "blogs");
const extensions = ["md", "mdx"];

function getBlogContentBySlug(slug) {
  // try all possible extensions
  for (const extension of extensions) {
    try {
      const fullPath = join(blogsDirectory, `${slug}.${extension}`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      return matter(fileContents);
    } catch (err) {
      continue;
    }
  }
}

// get all the slugs for the blog posts
function getAllBlogFileNames() {
  return fs.readdirSync(blogsDirectory);
}

function getBlogByFileName(fileName, fields = []) {
  const slug = fileName.replace(/\.mdx?$/, "");
  const { data, content } = getBlogContentBySlug(slug);
  const timeReading = readingTime(content);
  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "timeReading") {
      items[field] = timeReading;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

// get all the slugs for the blog posts
function getAllBlogs(fields = []) {
  return getAllBlogFileNames()
    .map((fileName) => getBlogByFileName(fileName, fields))
    .sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1));
}

function getBlogByTag(tag, fields = []) {
  return getAllBlogs(fields).filter((blog) => {
    const tags = blog.tags ?? [];
    return tags.includes(tag);
  });
}

function getAllTags() {
  const blogs = getAllBlogs(["tags"]);
  const allTags = new Set();
  blogs.forEach((blog) => {
    const tags = blog.tags;
    tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags);
}

const api = {
  getBlogContentBySlug,
  getAllBlogFileNames,
  getAllBlogs,
  getBlogByTag,
  getBlogByFileName,
  getAllTags,
};

export default api;
