function Section({ title, children }) {
  return (
    <div>
      <h1 className="text-slate-100 text-4xl pb-4">
        <strong className="purple">{title} </strong>
      </h1>
      {children}
    </div>
  );
}

export default Section;
