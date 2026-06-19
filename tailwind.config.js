/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./blogs/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate.700"),
            "--tw-prose-headings": theme("colors.slate.900"),
            "--tw-prose-lead": theme("colors.slate.600"),
            "--tw-prose-links": theme("colors.blue.600"),
            "--tw-prose-bold": theme("colors.slate.900"),
            "--tw-prose-counters": theme("colors.slate.400"),
            "--tw-prose-bullets": theme("colors.slate.300"),
            "--tw-prose-hr": theme("colors.slate.200"),
            "--tw-prose-quotes": theme("colors.slate.700"),
            "--tw-prose-quote-borders": theme("colors.blue.500"),
            "--tw-prose-captions": theme("colors.slate.500"),
            "--tw-prose-code": theme("colors.slate.800"),
            "--tw-prose-th-borders": theme("colors.slate.300"),
            "--tw-prose-td-borders": theme("colors.slate.200"),
            maxWidth: "none",
            // smooth, readable measure and rhythm
            lineHeight: "1.8",
            p: { marginTop: "1.1em", marginBottom: "1.1em" },
            // headings use the Raleway display font
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
            },
            h2: {
              marginTop: "2.2em",
              paddingBottom: "0.3em",
              borderBottom: `1px solid ${theme("colors.slate.200")}`,
            },
            // links: subtle underline that strengthens on hover
            a: {
              textDecorationColor: theme("colors.blue.600 / 35%"),
              textUnderlineOffset: "2px",
              fontWeight: "500",
              transition: "text-decoration-color 0.15s ease",
            },
            "a:hover": { textDecorationColor: theme("colors.blue.600") },
            blockquote: {
              fontStyle: "normal",
              fontWeight: "400",
              borderLeftWidth: "3px",
              paddingLeft: "1.25em",
              color: theme("colors.slate.600"),
            },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": theme("colors.slate.300"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-lead": theme("colors.slate.400"),
            "--tw-prose-links": theme("colors.blue.400"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-counters": theme("colors.slate.500"),
            "--tw-prose-bullets": theme("colors.slate.600"),
            "--tw-prose-hr": theme("colors.slate.700"),
            "--tw-prose-quotes": theme("colors.slate.200"),
            "--tw-prose-quote-borders": theme("colors.blue.400"),
            "--tw-prose-captions": theme("colors.slate.400"),
            "--tw-prose-code": theme("colors.slate.100"),
            "--tw-prose-th-borders": theme("colors.slate.600"),
            "--tw-prose-td-borders": theme("colors.slate.700"),
            h2: { borderBottomColor: theme("colors.slate.700") },
            a: { textDecorationColor: theme("colors.blue.400 / 35%") },
            "a:hover": { textDecorationColor: theme("colors.blue.400") },
            blockquote: { color: theme("colors.slate.300") },
          },
        },
      }),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animated"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
