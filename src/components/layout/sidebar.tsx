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
    <nav className="hidden h-full w-48 flex-col border-r border-border sm:flex">
      <div className="px-4 py-3 font-mono text-xs text-foreground-muted">
        navigation
      </div>
      <div className="flex flex-col">
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
                "group flex min-w-fit items-center gap-3 border-l-2 px-4 py-2 font-mono text-sm transition-colors duration-150",
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

