import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost as BlogPostType, getBlogPostBySlug } from '../utils/blogUtils';
import { useQuery } from '@tanstack/react-query';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Use React Query to fetch the blog post by slug
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => slug ? getBlogPostBySlug(slug) : Promise.resolve(null),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: !!slug
  });

  if (isLoading) {
    return <div className="text-center py-10">Loading post...</div>;
  }

  if (error || !post) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error instanceof Error ? error.message : 'Post not found'}</p>
        <Link to="/blog" className="text-zinc-700 hover:text-zinc-900 underline">
          ← Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link to="/blog" className="text-zinc-700 hover:text-zinc-900">
          ← Back to all posts
        </Link>
      </div>
      
      <header className="mb-8">
        <time className="text-sm text-zinc-500">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </header>
      
      <div className="prose prose-zinc prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-zinc-800 max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
