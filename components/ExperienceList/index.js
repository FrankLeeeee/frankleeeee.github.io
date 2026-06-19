const ExperienceList = ({ data }) => {
  return (
    <ul className="space-y-2">
      {data.map((item, idx) => (
        <li
          key={idx}
          className="group flex gap-4 sm:gap-5 rounded-xl p-3 sm:p-4 transition-colors duration-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/40"
        >
          {/* logo tile */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80 dark:ring-slate-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="h-9 w-9 object-contain"
              loading="lazy"
            />
          </div>

          {/* content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-x-3 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold leading-tight text-slate-800 dark:text-slate-200">
                {item.company}
              </h3>
              <span className="shrink-0 text-sm font-medium tabular-nums text-slate-500 dark:text-slate-400">
                {item.period}
              </span>
            </div>

            <p className="mt-0.5 text-sm font-medium text-violet-600 dark:text-violet-400">
              {item.role}
            </p>

            {item.description && (
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
                {item.link && (
                  <>
                    {" · "}
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {item.link.label}
                    </a>
                  </>
                )}
              </p>
            )}

            {item.supervisors && item.supervisors.length > 0 && (
              <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                {item.relationLabel || "Supervised by"}{" "}
                {item.supervisors.map((s, i) => (
                  <span key={i}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {s.name}
                    </a>
                    {i < item.supervisors.length - 2
                      ? ", "
                      : i === item.supervisors.length - 2
                      ? " and "
                      : ""}
                  </span>
                ))}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
