import { useRouterState } from "@tanstack/react-router";
import { getPosts } from "@/utils/content";

export function Footer() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const postCount = getPosts().length;

  return (
    <footer className="hidden h-8 w-full items-center justify-between border-t border-border bg-background-secondary px-4 font-mono text-xs text-foreground-muted sm:flex">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span>connected</span>
        </div>
        <span>{currentPath === "/" ? "~" : currentPath}</span>
      </div>

      <span>© 2025 ajndkr.com</span>

      <div className="flex items-center gap-4">
        <span>utf-8</span>
        <span>{postCount} posts</span>
      </div>
    </footer>
  );
}

