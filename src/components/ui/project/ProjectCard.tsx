import { memo, useState, useCallback } from 'react';
import type { Project, TechItem } from '../../../types/types';
import { TechItemButton } from '../technology/TechItemButton';

interface ProjectCardProps {
  project: Project;
  techItemsMap: Map<string, TechItem>;
  onClick: (project: Project) => void;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  techItemsMap,
  onClick,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  }, [onClick, project]);

  return (
    <article
      className="project-card transition-transform hover:scale-105 cursor-pointer"
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`Zobacz szczegóły projektu ${project.title}`}
    >
      <div className="project-card-media-wrapper overflow-hidden rounded-t-lg aspect-video relative bg-gray-100">
        {isHovered && project.animationURL ? (
           <img 
             src={project.animationURL} 
             alt={`${project.title} animacja`} 
             className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
             loading="eager"
           />
        ) : (
          <img 
            src={project.thumbnailURL} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy" 
          />
        )}
      </div>

      <div className="project-card-content p-4">
        <h3 className="project-card-title text-xl font-bold mb-3">{project.title}</h3>
        <div className="project-card-tech-list flex flex-wrap gap-2">
          {project.technologyIds?.map((techId) => {
            const techItem = techItemsMap.get(techId);
            if (!techItem) return null;

            return (
              <div key={techItem.id} className="pointer-events-none scale-90 origin-left">
                <TechItemButton
                  item={techItem}
                  isSelected={false} 
                  onClick={() => {}} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
});