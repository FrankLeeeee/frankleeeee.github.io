import React from "react";
import NextLink from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <div>
      <div className="col-span-1 shadow-sm">
        <div className="flex">
          {/* top side image */}
          <img
            src={blog.ogImage.url}
            alt="blog"
            lazy="loading"
            className="object-cover w-16 h-16 md:h-24 md:w-24 lg:h-32 lg:w-32 object-cover rounded-l-md"
          />

          {/* bottom side content */}
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-l border-gray-300 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-xs md:text-sm">
              <NextLink
                as={`/blogs/${blog.slug}`}
                href="/blogs/[slug]"
                className="text-base md:text-2xl font-medium text-black hover:text-blue-400 text-wrap"
              >
                {blog.title}
              </NextLink>

              <p className="text-gray-500 line-clamp-1 truncate">
                {blog.description}
              </p>

              <div className="flex space-x-2 text-gray-500">
                <p>{blog.timeReading.text}</p>
                <p>•</p>

                <p>{blog.date}</p>
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {blog.tags &&
                  blog.tags.map((tag) => (
                    <p className="rounded px-1 border border-gray-300 text-gray-500 hover:text-gray-800 hover:border-gray-400">
                      {tag}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
