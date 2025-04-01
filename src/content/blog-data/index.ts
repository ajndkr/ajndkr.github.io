import * as helloWorld from './hello-world';
import * as reactTips from './react-tips';

export interface BlogPostData {
  slug: string;
  metadata: {
    title: string;
    date: string;
    excerpt: string;
  };
  content: string;
}

// Create a mapping of all blog posts with their slugs
export const blogPostsData: Record<string, BlogPostData> = {
  'hello-world': {
    slug: 'hello-world',
    metadata: helloWorld.metadata,
    content: helloWorld.content
  },
  'react-tips': {
    slug: 'react-tips',
    metadata: reactTips.metadata,
    content: reactTips.content
  }
};

// Export a list of all blog posts
export const getAllBlogPosts = (): BlogPostData[] => {
  return Object.values(blogPostsData);
};

// Export a function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPostData | undefined => {
  return blogPostsData[slug];
};
