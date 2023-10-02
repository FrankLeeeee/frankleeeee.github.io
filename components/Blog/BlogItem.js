import React from "react";
import NextLink from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <div>
      <div className="col-span-1 flex rounded-md shadow-sm">
        {/* left side image */}
        <div className="flex flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white">
          <img
            src={blog.ogImage.url}
            alt="blog"
            lazy="loading"
            className="h-20 w-20 object-cover"
          />
        </div>

        {/* right side content */}
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white h-20">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <NextLink
              as={`/blogs/${blog.slug}`}
              href="/blogs/[slug]"
              className="font-medium text-gray-900 hover:text-gray-600"
            >
              {blog.title}
            </NextLink>

            <p className="text-gray-500 line-clamp-1 truncate">
              {blog.description}
            </p>

            <div className="flex space-x-2">
              <p>{blog.timeReading.text}</p>
              <p>•</p>

              <p>{blog.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
