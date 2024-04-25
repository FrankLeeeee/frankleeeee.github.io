const HonourList = ({ data }) => {
  return (
    <ul className="list-disc list-inside">
      {data.map((item, idx) => (
        <li className="text-slate-300" key={idx}>
          [{item.date}]&nbsp;&nbsp;{item.text}
        </li>
      ))}
    </ul>
  );
};

export default HonourList;
