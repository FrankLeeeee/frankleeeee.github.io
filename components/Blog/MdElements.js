import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const H1 = ({ children, id }) => {
  return (
    <h1 id={id} className="text-slate-900 dark:text-white scroll-mt-20">
      {children}
    </h1>
  );
};

export const H2 = ({ children, id }) => {
  return (
    <h2 id={id} className="text-slate-900 dark:text-white scroll-mt-20">
      {children}
    </h2>
  );
};

export const H3 = ({ children, id }) => {
  return (
    <h3 id={id} className="text-slate-800 dark:text-white scroll-mt-20">
      {children}
    </h3>
  );
};

export const H4 = ({ children, id }) => {
  return (
    <h4 id={id} className="text-slate-800 dark:text-white scroll-mt-20">
      {children}
    </h4>
  );
};

export const Link = ({ children, href }) => {
  return (
    <a
      className="text-blue-600 dark:text-blue-400 font-medium underline decoration-blue-600/30 dark:decoration-blue-400/30 underline-offset-2 hover:decoration-blue-600 dark:hover:decoration-blue-400 break-words"
      href={href}
    >
      {children}
    </a>
  );
};

export const ListItem = ({ children }) => {
  return <li className="text-slate-600 dark:text-slate-400">{children}</li>;
};

export const Code = ({ className, children }) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter PreTag="div" language={match[1]} style={oneDark}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[0.875em] font-medium text-slate-800 dark:text-slate-200">
      {children}
    </code>
  );
};
