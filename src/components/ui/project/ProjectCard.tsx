import { memo, useState, useCallback } from 'react';
import type { Project, TechItem } from '../../../types/types';

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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsVideoLoaded(false); 
  }, []);
  const handleVideoCanPlay = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  }, [onClick, project]);

  return (
    <article
      id={`project-${project.id}`} // Scroll target
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
        
        <img
          src={project.thumbnailURL}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered && isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {isHovered && project.animationURL && (
          <video
            src={project.animationURL}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onCanPlay={handleVideoCanPlay}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {isHovered && project.animationURL && !isVideoLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity">
            <div 
              className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" 
              role="status" 
              aria-label="Ładowanie podglądu wideo"
            />
          </div>
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
                <span className="tech-item-btn notclickable">
                  {techItem.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
});