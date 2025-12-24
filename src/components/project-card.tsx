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
      <div className="relative min-h-[72px] border-l-2 border-transparent bg-transparent px-3 py-4 transition-all duration-150 active:bg-background-secondary hover:border-accent hover:bg-background-secondary sm:min-h-0 sm:p-4">
        <div className="mb-2 flex items-baseline justify-between gap-2">
          <h3 className="font-mono text-base font-bold text-accent sm:text-sm">
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-xs text-foreground-muted">
            [{project.status}]
          </span>
        </div>
        <p className="text-sm leading-relaxed text-foreground-muted">
          {project.description}
        </p>
      </div>
    </a>
  );
}

