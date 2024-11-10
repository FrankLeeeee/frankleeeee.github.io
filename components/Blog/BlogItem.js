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
            className="object-cover h-24 w-32 object-cover rounded-l-md"
          />

          {/* bottom side content */}
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-l border-gray-300 bg-white h-24">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <NextLink
                as={`/blogs/${blog.slug}`}
                href="/blogs/[slug]"
                className="text-xl font-medium text-black hover:text-gray-600"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
