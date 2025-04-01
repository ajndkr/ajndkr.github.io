// Import blog data from TypeScript files
import { getAllBlogPosts, getBlogPostBySlug as getPostBySlug } from '../content/blog-data';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Helper function to convert our TypeScript blog data to BlogPost objects
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  console.log('Fetching blog posts from TypeScript data');
  
  try {
    // Get all blog posts from our TypeScript data
    const allPosts = getAllBlogPosts();
    console.log(`Found ${allPosts.length} blog posts`);
    
    // Convert to BlogPost format
    const posts: BlogPost[] = allPosts.map(post => ({
      slug: post.slug,
      title: post.metadata.title,
      date: post.metadata.date,
      excerpt: post.metadata.excerpt,
      content: post.content
    }));
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error processing blog posts:', error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  console.log(`Fetching blog post with slug: ${slug}`);
  
  try {
    const post = getPostBySlug(slug);
    
    if (!post) {
      console.log(`Blog post with slug '${slug}' not found`);
      return null;
    }
    
    return {
      slug: post.slug,
      title: post.metadata.title,
      date: post.metadata.date,
      excerpt: post.metadata.excerpt,
      content: post.content
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug '${slug}':`, error);
    return null;
  }
};
