import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/Blog/BlogCard";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function About() {
  // fetch data from api
  const [blogs, setBlogs] = useState([]);
  const mediumURL = "https://frankleeeee.medium.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API =
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@frankleeeee";
        const result = await axios(API);

        if (result.data.status !== "ok") {
          console.log(result.data);
        } else {
          // set blogs
          const blogs = result.data.items.map((blog) => ({
            title: blog.title,
            categories: blog.categories,
            link: blog.link,
            pubDate: blog.pubDate,
            thumbnail: blog.thumbnail,
          }));

          // only keep the first 5 blogs if the length is greater than 5
          if (blogs.length > 10) {
            blogs.length = 10;
          }

          console.log(blogs);
          setBlogs(blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div>
        <div className="container mx-auto pt-4 md:pt-12 md:px-12 lg:pt-24 lg:px-24">
          <h1 className="text-slate-100 text-4xl p-4">
            <strong className="purple">My Recent Blogs</strong>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog, index) => (
              <div key={index} className="p-8 md:p-6 lg:p-4">
                <BlogCard
                  title={blog.title}
                  categories={blog.categories}
                  image={blog.thumbnail}
                  link={blog.link}
                  pubDate={blog.pubDate}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center text-center text-slate-100 p-8">
          <a
            href={mediumURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded bg-transparent border-white text-slate-100 px-2 py-2 font-semibold ring-1 ring-inset ring-white"
          >
            <ArrowRightCircleIcon className="h-8 mr-2" />
            <span>View More on Medium</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default About;
