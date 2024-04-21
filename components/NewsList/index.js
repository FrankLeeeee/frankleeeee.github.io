import news from "../../data/news";

const NewsList = ({ keep_recent = 10 }) => {
  const data = news.slice(0, keep_recent);

  return (
    <ul className="list-disc list-inside">
      {data.map((item, idx) => (
        <li className="text-slate-100" key={idx}>
          [{item.date}]&nbsp;&nbsp;{item.emoji}&nbsp;{item.text()}
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
