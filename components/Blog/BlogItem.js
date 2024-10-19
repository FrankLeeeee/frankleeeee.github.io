import React from "react";
import NextLink from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <div>
      <div className="col-span-1 shadow-sm mx-4">
        {/* top side image */}
        <div className="flex flex-1">
          <img
            src={blog.ogImage.url}
            alt="blog"
            lazy="loading"
            className="object-cover h-40 w-full object-cover"
          />
        </div>

        {/* bottom side content */}
        <div className="flex flex-1 items-center justify-between truncate rounded-b-md border-b border-r border-t border-gray-200 bg-white h-20">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <NextLink
              as={`/blogs/${blog.slug}`}
              href="/blogs/[slug]"
              className="font-medium text-large text-gray-900 hover:text-gray-600"
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
