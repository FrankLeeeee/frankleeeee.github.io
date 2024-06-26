function Techstack({ data }) {
  return (
    <div>
      {data.map((publication, idx) => {
        return (
          <div className="text-slate-400 mb-3" key={idx}>
            <strong>{publication.category}</strong>
            <div className="mt-3 ml-8 my-4 flex flex-col">
              {publication.items.map((val, idx) => (
                <ul className="list-disc my-2" key={idx}>
                  <li>
                    <span>
                      <a
                        href={val.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                      >
                        <span>{val.name}</span>
                      </a>
                    </span>
                    <br />
                    {val.authors.map((author, idx) => (
                      <span
                        className={author === "Shenggui Li" ? "font-bold" : ""}
                        key={idx}
                      >
                        {author},&nbsp;
                      </span>
                    ))}
                    <br />
                    <span>{val.publisher}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Techstack;
