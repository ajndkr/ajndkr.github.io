import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { makeTitle } from "@/utils/seo";
import { SITE_CONFIG } from "@/config";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [{ title: makeTitle("projects") }],
  }),
});

function ProjectsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="terminal-prompt font-mono text-sm text-accent">
        find ./projects -type d
      </div>

      <div className="space-y-px">
        {SITE_CONFIG.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
