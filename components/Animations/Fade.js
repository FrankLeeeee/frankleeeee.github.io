const Fade = ({ children }) => {
  return (
    <div className="animate-fade animate-once animate-duration-500 animate-ease-in">
      {children}
    </div>
  );
};

export default Fade;
