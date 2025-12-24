import { createFileRoute, Link } from "@tanstack/react-router";
import { MoveLeft } from "lucide-react";
import React from "react";
import { makeTitle } from "@/utils/seo";

export const Route = createFileRoute("/posts/$slug")({
  component: PostDetail,
  head: ({ loaderData }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const title = (loaderData as any)?.frontmatter?.title ?? "Post";
    return {
      meta: [{ title: makeTitle(title) }],
    };
  },
  loader: async ({ params }) => {
    const modules = import.meta.glob<{
      default: React.ComponentType;
      frontmatter: { title: string; date: string; excerpt: string };
    }>("/src/content/posts/*.mdx");

    const path = `/src/content/posts/${params.slug}.mdx`;
    const loadPost = modules[path];

    if (!loadPost) {
      throw new Error(`Post not found: ${params.slug}`);
    }

    const mod = await loadPost();

    return {
      Component: mod.default,
      frontmatter: mod.frontmatter,
    };
  },
});

function PostDetail() {
  const data = Route.useLoaderData();
  
  if (!data) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { Component, frontmatter } = data as any;

  return (
    <article className="space-y-8">
      <Link
        to="/posts"
        search={{ page: 1 }}
        className="group inline-flex items-center gap-2 font-mono text-sm text-foreground-muted hover:text-accent"
      >
        <MoveLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        <span>back to posts</span>
      </Link>

      <header className="space-y-2 border-b border-border pb-8">
        <h1 className="font-mono text-xl font-bold text-accent sm:text-2xl">
          {frontmatter.title}
        </h1>
        <div className="font-mono text-xs text-foreground-muted">
          {frontmatter.date}
        </div>
      </header>

      <div className="prose prose-sm dark:prose-invert sm:prose-base max-w-none prose-headings:font-normal prose-a:text-accent prose-a:no-underline prose-a:hover:underline prose-code:text-accent prose-code:before:content-none prose-code:after:content-none prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border">
        <Component />
      </div>
    </article>
  );
}
