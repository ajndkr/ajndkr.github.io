export const SITE_CONFIG = {
  title: "ajndkr.com",
  author: "Ajinkya",
  description: "A terminal-inspired personal blog and portfolio.",
  postsPerPage: 4,
  socials: {
    github: "https://github.com/ajndkr",
    linkedin: "https://www.linkedin.com/in/ajinkyaindulkar",
  },
  projects: [
    {
      slug: "signal-ui",
      name: "Signal UI",
      description: "Terminal-inspired component library for React applications.",
      status: "active",
      url: "#",
    },
    {
      slug: "dotfiles",
      name: "Dotfiles",
      description: "My personal configuration files for Zsh, Neovim, and Tmux.",
      status: "stable",
      url: "#",
    },
    {
      slug: "mdx-blog",
      name: "MDX Blog Starter",
      description: "A minimal blog starter using TanStack Router and MDX.",
      status: "beta",
      url: "#",
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Rust", "HTML/CSS", "SQL", "Go", "Bash"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "Git", "Vite", "TanStack Router"],
  }
} as const;

export const BASE_PATH = "/me"; // Set this if deploying to a subdirectory
