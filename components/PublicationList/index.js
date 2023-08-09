import { publications } from "../../data";

function Techstack() {
  return (
    <div className="py-4">
      <h1 className="text-white text-4xl pb-4">
        <strong className="purple">Selected Publications </strong>
      </h1>
      {publications.map((publication, idx) => {
        return (
          <div className="text-white mb-3" key={idx}>
            <strong>{publication.category}</strong>
            <div className="mt-3 ml-8 flex flex-col">
              {publication.items.map((val, idx) => (
                <ul className="list-disc my-3">
                  <li key={idx}>
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

                // <div
                //   key={idx}
                //   className="mx-2 py-6 md:mx-6 md:p-6 text-white opacity-90 border overflow-hidden rounded-md"
                // >
                //   <div className="flex justify-center">
                //     <span className="text-sm">{val.name}</span>
                //   </div>
                // </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Techstack;
