const FadeUp = ({ children }) => {
  return (
    <div className="animate-fade-up animate-once animate-duration-200 animate-ease-in animate-normal animate-fill-forwards">
      {children}
    </div>
  );
};

export default FadeUp;
