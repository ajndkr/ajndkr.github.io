import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PostCard } from "@/components/post-card";
import { Pagination } from "@/components/ui/pagination";
import { makeTitle } from "@/utils/seo";
import { getPosts } from "@/utils/content";
import { SITE_CONFIG } from "@/config";

export const Route = createFileRoute("/posts/")({
  component: PostsIndex,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      page: Number(search?.page ?? 1) || 1,
    };
  },
  head: () => ({
    meta: [{ title: makeTitle("posts") }],
  }),
  loader: async () => {
    return getPosts();
  },
});

function PostsIndex() {
  const posts = Route.useLoaderData();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  // Calculate year counts
  const yearCounts = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const totalPages = Math.ceil(posts.length / SITE_CONFIG.postsPerPage);
  const paginatedPosts = posts.slice(
    (page - 1) * SITE_CONFIG.postsPerPage,
    page * SITE_CONFIG.postsPerPage
  );

  const handlePageChange = (newPage: number) => {
    navigate({
      search: (prev) => ({ ...prev, page: newPage }),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      <div className="terminal-prompt font-mono text-sm text-accent">
        ls -la ./content/posts --group-by-year
        </div>

      <div className="space-y-px">
        {paginatedPosts.map((post, index) => {
          const date = new Date(post.date);
          const year = date.getFullYear();
          const prevPost = paginatedPosts[index - 1];
          const prevYear = prevPost
            ? new Date(prevPost.date).getFullYear()
            : null;

          const showYearHeader = index === 0 || year !== prevYear;

          return (
            <div key={post.slug}>
              {showYearHeader && (
                <div className="flex items-center gap-4 py-6 first:pt-2">
                  <span className="font-mono text-xl font-bold text-primary">
                    {year}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="font-mono text-sm text-foreground-muted">
                    {yearCounts[year]} entries
                  </span>
                </div>
              )}
              <PostCard post={post} />
            </div>
          );
        })}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
