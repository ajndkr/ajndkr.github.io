import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

interface Project {
  title: string;
  description?: string;
  url: string;
  stars?: number;
  forks?: number;
  language?: string;
}

import SEO from "../components/SEO";

const OpenSource = () => {
  const [projects, setProjects] = useState<Project[]>([
    { title: "pr-pulse", url: "https://github.com/ajndkr/pr-pulse" },
    { title: "devx", url: "https://github.com/ajndkr/devx" },
    { title: "lanarky", url: "https://github.com/ajndkr/lanarky" },
  ]);

  const fetchRepoStats = async (repoName: string): Promise<Project> => {
    const response = await fetch(
      `https://api.github.com/repos/ajndkr/${repoName}`,
    );
    const data = await response.json();
    return {
      title: repoName,
      description: data.description,
      url: data.html_url,
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
    };
  };

  useEffect(() => {
    const fetchAllStats = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          const stats = await fetchRepoStats(project.title);
          return stats;
        }),
      );
      setProjects(updatedProjects);
    };

    fetchAllStats();
  }, []);

  return (
    <>
      <SEO
        title="Open Source"
        description="my side projects: more commits than my houseplants get water"
        path="/open-source"
      />
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          my open-source projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              language={project.language}
              stars={project.stars}
              forks={project.forks}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </main>
    </>
  );
};

export default OpenSource;
