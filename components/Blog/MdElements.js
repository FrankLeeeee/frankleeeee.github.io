import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const H1 = ({ children, id }) => {
  return (
    <h1 id={id} className="text-white">
      {children}
    </h1>
  );
};

export const H2 = ({ children, id }) => {
  return (
    <h2 id={id} className="text-white">
      {children}
    </h2>
  );
};

export const H3 = ({ children, id }) => {
  return (
    <h3 id={id} className="text-white">
      {children}
    </h3>
  );
};

export const Link = ({ children, href }) => {
  return (
    <a className="text-slate-200 break-all" href={href}>
      {children}
    </a>
  );
};

export const ListItem = ({ children }) => {
  return <li className="text-slate-400">{children}</li>;
};

export const Code = ({ className, children }) => {
  // if a language is specified, use the SyntaxHighlighter
  // the codeblock will pass the language as a className
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      style={oneDark}
    />
  ) : (
    <code className="text-slate-200">{children}</code>
  );
};
