import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "../ThemeToggle";

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
  return <li className="text-slate-700 dark:text-slate-300">{children}</li>;
};

// Resolve a size hint into a CSS length: a bare number -> px, a "%" value
// stays as-is. Returns undefined when no usable hint is present.
const toCssSize = (value) => {
  if (value == null) return undefined;
  const v = String(value).trim();
  if (/^\d+$/.test(v)) return `${v}px`;
  if (/^\d+(px|%|rem|em|vw)$/.test(v)) return v;
  return undefined;
};

export const Img = ({ src, alt, title, width, height }) => {
  // Size can be set two ways:
  //   markdown:  ![alt](src "480")  or  ![alt](src "60%")
  //   raw HTML:  <img src="..." width="480">  or  width="60%"
  const w = toCssSize(width) || toCssSize(title);
  // A numeric/size title is a sizing hint, not a real caption.
  const isSizeTitle = toCssSize(title) !== undefined;

  return (
    <img
      src={src}
      alt={alt || ""}
      title={isSizeTitle ? undefined : title}
      loading="lazy"
      className="mx-auto block h-auto rounded-xl"
      style={{ maxWidth: "100%", width: w, height: toCssSize(height) }}
    />
  );
};

export const Code = ({ className, children }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => setMounted(true), []);
  const match = /language-(\w+)/.exec(className || "");

  if (!match) {
    return (
      <code className="rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {children}
      </code>
    );
  }

  // Before mount, match the server render (ThemeProvider defaults to "dark")
  // to avoid a hydration mismatch in the syntax highlighter's markup.
  const isDark = mounted ? theme === "dark" : true;
  const code = String(children).replace(/\n$/, "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // fallback for browsers / contexts without the async clipboard API
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-700">
      {/* editor-style toolbar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {match[1]}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy code"}
            className="flex items-center gap-1 font-mono text-xs text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-200"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        PreTag="div"
        language={match[1]}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          padding: "1rem 1.25rem",
          fontSize: "0.9rem",
          lineHeight: 1.6,
          background: isDark ? "#0f172a" : "#f8fafc",
        }}
        codeTagProps={{ style: { fontFamily: "var(--font-mono)" } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
