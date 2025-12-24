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
    <article className="space-y-6 sm:space-y-8">
      <Link
        to="/posts"
        search={{ page: 1 }}
        className="group -ml-2 inline-flex min-h-[44px] items-center gap-2 rounded-md px-2 font-mono text-sm text-foreground-muted transition-colors active:bg-highlight hover:text-accent sm:ml-0 sm:min-h-0"
      >
        <MoveLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1 sm:h-4 sm:w-4"
        />
        <span>back to posts</span>
      </Link>

      <header className="space-y-2 border-b border-border pb-6 sm:pb-8">
        <h1 className="font-mono text-lg font-bold leading-tight text-accent sm:text-2xl">
          {frontmatter.title}
        </h1>
        <div className="font-mono text-xs text-foreground-muted">
          {frontmatter.date}
        </div>
      </header>

      <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-normal prose-headings:leading-tight prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline prose-a:active:text-accent-muted prose-a:hover:underline prose-code:text-accent prose-code:before:content-none prose-code:after:content-none prose-pre:overflow-x-auto prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border sm:prose-base">
        <Component />
      </div>
    </article>
  );
}
