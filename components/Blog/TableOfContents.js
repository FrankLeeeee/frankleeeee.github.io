import { useEffect, useState } from "react";

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (headings.length === 0) return;

    const updateActive = () => {
      const headingEls = headings
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      let currentId = headings[0]?.id ?? "";
      for (const el of headingEls) {
        if (el.getBoundingClientRect().top < 100) {
          currentId = el.id;
        }
      }
      setActiveId(currentId);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <p className="text-slate-900 dark:text-white text-xs font-semibold mb-3 uppercase tracking-wider">
        On this page
      </p>
      <ul className="space-y-0">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`text-sm leading-snug block py-1 border-l-2 transition-all duration-150 ${
                level === 3 ? "pl-5" : "pl-3"
              } ${
                activeId === id
                  ? "border-slate-700 dark:border-slate-300 text-slate-900 dark:text-white font-medium"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                setActiveId(id);
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
