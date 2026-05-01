const ProjectList = ({ data }) => {
  return (
    <ul className="list-disc list-inside">
      {data.map((item, idx) => (
        <li className="text-slate-400" key={idx}>
          <span>{item.emoji}&nbsp;</span>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            {item.name}
          </a>
          {/* additional information */}
          {item.description && (
            <span className="text-slate-400">: {item.description}</span>
          )}
          {/* social badge */}
          {item.badge && (
            <span>
              &nbsp;
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.shields.io/github/stars/${item.badge}?style=social`}
                alt="star-badge"
                className="inline"
                loading="lazy"
              />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
