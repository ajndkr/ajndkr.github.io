import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4 text-center font-mono">
      <h1 className="text-4xl font-bold text-accent">404</h1>
      <div className="space-y-2">
        <p className="text-lg text-foreground">
          zsh: command not found
        </p>
        <p className="text-sm text-foreground-muted">
          The requested path does not exist.
        </p>
      </div>
      <div className="pt-8">
        <Link
          to="/"
          className="group relative inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          <span>$ cd ~</span>
          <span className="animate-pulse">_</span>
        </Link>
      </div>
    </div>
  );
}

