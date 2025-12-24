
export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export function getPosts(): Post[] {
  const posts = import.meta.glob<{
    frontmatter: { title: string; date: string; excerpt: string };
  }>("/src/content/posts/*.mdx", { eager: true });

  return Object.entries(posts)
    .map(([path, mod]) => {
      const slug = path.split("/").pop()?.replace(".mdx", "") ?? "";
      return {
        slug,
        ...mod.frontmatter,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
