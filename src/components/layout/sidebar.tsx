import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
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

export function Sidebar() {
  // We can track active state via router
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav className="flex w-full flex-col border-b border-border sm:h-full sm:w-48 sm:border-b-0 sm:border-r">
      <div className="hidden px-4 py-3 text-xs text-foreground-muted sm:block font-mono">
        navigation
      </div>
      <div className="flex overflow-x-auto sm:flex-col">
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
                "group flex min-w-fit items-center gap-3 border-l-2 px-4 py-3 font-mono text-sm transition-colors duration-150 sm:py-2",
                isActive
                  ? "border-accent bg-highlight text-accent"
                  : "border-transparent text-foreground-muted hover:bg-highlight hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

