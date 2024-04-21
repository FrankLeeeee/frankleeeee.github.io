const NewsList = ({ data, keep_recent = 10 }) => {
  data = data.slice(0, keep_recent);
  return (
    <ul className="list-disc list-inside">
      {data.map((item, idx) => (
        <li className="text-slate-100" key={idx}>
          {item.date}: {item.emoji} <div>{item.text()}</div>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
