import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { getPosts } from "@/utils/content";
import {
  FileText,
  User,
  FolderOpen,
  Mail,
  Home,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "home", path: "/", icon: Home },
  { label: "posts", path: "/posts", icon: FileText },
  { label: "about", path: "/about", icon: User },
  { label: "projects", path: "/projects", icon: FolderOpen },
  { label: "contact", path: "/contact", icon: Mail },
];

export function MobileNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const postCount = getPosts().length;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      {/* Mobile Footer Info Bar */}
      <div className="flex items-center justify-between border-t border-border bg-background-secondary/95 px-4 py-1.5 font-mono text-[10px] text-foreground-muted backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
          <span>{currentPath === "/" ? "~" : currentPath}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{postCount} posts</span>
          <span>© 2025</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border bg-background-secondary/95 pb-safe backdrop-blur-sm">
        <div className="flex items-stretch justify-around">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === "/"
                ? currentPath === "/"
                : currentPath.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex min-h-[52px] flex-1 flex-col items-center justify-center gap-1 px-2 py-2 transition-colors active:bg-highlight",
                  isActive
                    ? "text-accent"
                    : "text-foreground-muted"
                )}
              >
                <item.icon 
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isActive && "scale-110"
                  )} 
                />
                <span className={cn(
                  "font-mono text-[10px] tracking-tight",
                  isActive && "font-medium"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

