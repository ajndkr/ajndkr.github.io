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
      slug: "pr-pulse",
      name: "pr-pulse",
      description: "Generate weekly reports of all code changes in a github repository.",
      status: "active",
      url: "https://github.com/ajndkr/pr-pulse",
    },
    {
      slug: "devx",
      name: "devx",
      description: "CLI for automating my dev workflows.",
      status: "active",
      url: "https://github.com/ajndkr/devx",
    },
    {
      slug: "lanarky",
      name: "lanarky",
      description: "The web framework for building LLM microservices.",
      status: "deprecated",
      url: "https://github.com/ajndkr/lanarky",
    },
  ],
  skills: {
    languages: ["Python", "Go", "Bash", "SQL", "TypeScript [wip]", "Rust [wip]"],
    frameworks: ["PyTorch", "FastAPI", "Django", "Git", "Docker", "Kubernetes", "Pulumi", "Github Actions", "Google Cloud", "React + Tailwind CSS [wip]"],
  }
} as const;

export const BASE_PATH = "/me"; // Set this if deploying to a subdirectory
