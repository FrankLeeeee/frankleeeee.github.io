const GridLayout = ({ title, children }) => {
  return (
    <div>
      <div className="container mx-auto pt-4 md:pt-12 md:px-12 lg:pt-24 lg:px-24">
        <h1 className="text-white text-4xl py-4">
          <strong className="purple">{title}</strong>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
      </div>
    </div>
  );
};

export default GridLayout;
