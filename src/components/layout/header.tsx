import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-12 w-full items-center justify-between border-b border-border bg-background-secondary px-4 font-mono text-sm">
      <div className="flex items-center gap-4">
        <Link to="/" className="rounded-md px-2 py-1 font-bold transition-colors hover:bg-highlight hover:text-foreground">
          ~/ajndkr
        </Link>
        <span className="hidden rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent sm:inline-block">
          v1.0.0
        </span>
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-foreground-muted transition-colors hover:bg-highlight hover:text-foreground"
        aria-label="Toggle theme"
      >
        <span className="hidden sm:inline">[{theme === "dark" ? "◐" : "◑"}]</span>
        <span className="sm:hidden">
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        </span>
        <span className="hidden sm:inline">{theme}</span>
      </button>
    </header>
  );
}
