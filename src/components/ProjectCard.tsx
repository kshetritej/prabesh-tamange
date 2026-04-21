import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  description: string;
  metrics?: string;
  tags: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth">
      <div className="flex items-start justify-between gap-4 mb-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
          {project.category}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-smooth" />
      </div>

      <h3 className="text-xl md:text-2xl font-display font-semibold mb-3 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>

      {project.metrics && (
        <p className="text-sm font-medium text-secondary mb-6">
          → {project.metrics}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
