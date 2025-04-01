import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogUtils';
import { useQuery } from '@tanstack/react-query';

const BlogList = () => {
  // Use React Query to fetch blog posts
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: getBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  // Log any errors
  if (error) {
    console.error('Error loading blog posts:', error);
  }

  return (
    <div className="space-y-8">
      {isLoading ? (
        <p className="text-zinc-600">Loading blog posts...</p>
      ) : error ? (
        <p className="text-zinc-600">Error loading blog posts. Please try again later.</p>
      ) : posts.length === 0 ? (
        <p className="text-zinc-600">No blog posts found.</p>
      ) : (
        posts.map((post) => (
        <article key={post.slug} className="border-b border-zinc-200 pb-6 last:border-b-0">
          <Link to={`/blog/${post.slug}`} className="block group">
            <h2 className="text-xl font-semibold text-zinc-800 group-hover:text-zinc-600 mb-2">
              {post.title}
            </h2>
            <div className="text-sm text-zinc-500 mb-3">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <p className="text-zinc-600">{post.excerpt}</p>
            <div className="mt-3 text-sm font-medium text-zinc-700 group-hover:text-zinc-900">
              Read more →
            </div>
          </Link>
        </article>
      )))}
    </div>
  );
};

export default BlogList;
