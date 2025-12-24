import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--foreground-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          muted: "hsl(var(--accent-muted))",
          foreground: "hsl(var(--accent-foreground))",
        },
        highlight: "hsl(var(--highlight))",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [typography],
};
