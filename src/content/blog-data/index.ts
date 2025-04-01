import * as mvpInTwoDays from "./mvp-in-two-days";
import * as amIVibeCoder from "./am-i-a-vibe-coder";

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
  "mvp-in-two-days": {
    slug: "mvp-in-two-days",
    metadata: mvpInTwoDays.metadata,
    content: mvpInTwoDays.content,
  },
  "am-i-a-vibe-coder": {
    slug: "am-i-a-vibe-coder",
    metadata: amIVibeCoder.metadata,
    content: amIVibeCoder.content,
  },
};

// Export a list of all blog posts
export const getAllBlogPosts = (): BlogPostData[] => {
  return Object.values(blogPostsData);
};

// Export a function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPostData | undefined => {
  return blogPostsData[slug];
};
