interface Project {
  slug: string;
  name: string;
  description: string;
  status: "active" | "stable" | "beta" | "archived";
  url?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative border-l-2 border-transparent bg-transparent p-4 transition-all duration-150 hover:border-accent hover:bg-background-secondary">
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="font-mono text-sm font-bold text-accent">
            {project.name}
          </h3>
          <span className="font-mono text-xs text-foreground-muted">
            [{project.status}]
          </span>
        </div>
        <p className="font-sans text-sm text-foreground-muted">
          {project.description}
        </p>
      </div>
    </a>
  );
}

