import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-14 w-full items-center justify-between border-b border-border bg-background-secondary px-3 font-mono text-sm sm:h-12 sm:px-4">
      <div className="flex items-center gap-2 sm:gap-4">
        <Link 
          to="/" 
          className="flex min-h-[44px] items-center rounded-md px-2 py-1 font-bold transition-colors hover:bg-highlight hover:text-foreground active:bg-highlight sm:min-h-0"
        >
          ~/ajndkr
        </Link>
        <span className="hidden rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent sm:inline-block">
          v1.0.0
        </span>
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1 text-foreground-muted transition-colors hover:bg-highlight hover:text-foreground active:bg-highlight sm:min-h-0 sm:min-w-0 sm:justify-start"
        aria-label="Toggle theme"
      >
        <span className="hidden sm:inline">[{theme === "dark" ? "◐" : "◑"}]</span>
        <span className="sm:hidden">
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </span>
        <span className="hidden sm:inline">{theme}</span>
      </button>
    </header>
  );
}
