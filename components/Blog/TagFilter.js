const TagFilter = ({ tags, selectedTag, onTagSelect }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`rounded-full px-3 py-1 text-sm transition-colors duration-150 border ${
            selectedTag === tag
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-500 hover:text-slate-800 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-300"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
