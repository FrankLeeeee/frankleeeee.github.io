import React from "react";

export default function BlogCard({ title, categories, image, link, pubDate }) {
  return (
    <a
      className="w-full flex bg-white rounded-md shadow-md"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt="Blog Thumbnail" />
        <div className="px-3 py-3">
          <div className="font-bold text-xl mb-2">{title}</div>
          <span className="text-gray-500">{pubDate}</span>
        </div>
        <div className="px-3 py-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300"
            >
              #{category}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
