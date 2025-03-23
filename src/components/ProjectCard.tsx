import { Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
  url: string;
}

const ProjectCard = ({ title, description, language, stars, forks, url }: ProjectCardProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block border-2 border-zinc-800 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-zinc-600 mb-4">{description}</p>
      )}
      <div className="flex items-center gap-4">
        {language && (
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm">{language}</span>
          </div>
        )}
        {stars !== undefined && (
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span className="text-sm">{stars}</span>
          </div>
        )}
        {forks !== undefined && (
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span className="text-sm">{forks}</span>
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
