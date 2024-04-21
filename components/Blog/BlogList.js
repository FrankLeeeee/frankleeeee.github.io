const BlogList = ({ children }) => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
      </div>
    </div>
  );
};

export default BlogList;
