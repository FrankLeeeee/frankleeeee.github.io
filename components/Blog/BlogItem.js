import React from "react";
import Image from "next/image";
import NextLink from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <div>
      <div className="col-span-1 shadow-sm">
        <div className="flex">
          {/* top side image */}
          <div className="relative flex-shrink-0 w-16 md:w-24 lg:w-32 self-stretch rounded-l-md overflow-hidden">
            <Image
              src={blog.ogImage.url}
              alt="blog cover"
              fill
              sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 128px"
              className="object-cover"
            />
          </div>

          {/* bottom side content */}
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-l border-gray-200 dark:border-gray-300 bg-gray-50 dark:bg-white">
            <div className="flex-1 truncate px-4 py-2 text-xs md:text-sm">
              <NextLink
                as={`/blogs/${blog.slug}`}
                href="/blogs/[slug]"
                className="text-base md:text-2xl font-medium text-slate-800 dark:text-black hover:text-blue-500 dark:hover:text-blue-400 text-wrap"
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
                    <p key={tag} className="rounded px-1 border border-gray-300 text-gray-500 hover:text-gray-800 hover:border-gray-400">
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
