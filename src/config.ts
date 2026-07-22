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
      slug: "uv-boilerplate",
      name: "uv-boilerplate",
      description: "Template repository for new uv projects with boilerplate code.",
      status: "active",
      url: "https://github.com/ajndkr/uv-boilerplate",
    },
    {
      slug: "claude-usage",
      name: "claude-usage",
      description: "Tiny app to track Claude Code usage in real-time.",
      status: "active",
      url: "https://github.com/ajndkr/claude-usage",
    },
    {
      slug: "lanarky",
      name: "lanarky",
      description: "The web framework for building LLM microservices.",
      status: "archived",
      url: "https://github.com/ajndkr/lanarky",
    },
  ],
  skills: {
    languages: ["Python", "Go", "TypeScript", "Bash", "SQL"],
    frameworks: ["PyTorch", "FastAPI", "Django", "React + Tailwind CSS", "Git", "Docker", "Kubernetes", "Pulumi", "Github Actions", "Google Cloud"],
  }
} as const;

export const BASE_PATH = ""; // Set this if deploying to a subdirectory (e.g., "/my-app")
