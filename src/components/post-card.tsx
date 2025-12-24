import { Link } from "@tanstack/react-router";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    })
    .replace("/", "-");

  return (
    <Link
      to="/posts/$slug"
      params={{ slug: post.slug }}
      className="group block"
    >
      <div className="relative border-l-2 border-transparent p-4 transition-all duration-150 hover:border-accent hover:bg-background-secondary">
        {/* Mobile Layout */}
        <div className="mb-2 flex flex-col sm:hidden">
          <span className="mb-1 font-mono text-xs text-foreground-muted">
            {formattedDate}
          </span>
          <h3 className="font-mono text-sm font-medium text-accent">
            {post.title}
          </h3>
        </div>

        {/* Desktop Layout */}
        <div className="mb-2 hidden items-baseline gap-4 sm:flex">
          <span className="w-16 shrink-0 font-mono text-xs text-foreground-muted">
            {formattedDate}
          </span>
          <h3 className="font-mono text-sm font-medium text-accent">
            {post.title}
          </h3>
        </div>

        <p className="line-clamp-2 font-sans text-sm text-foreground-muted sm:pl-20">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

