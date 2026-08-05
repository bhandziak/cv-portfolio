import React, { useState, useCallback, useEffect, useMemo, Suspense } from 'react';
import type { Project, TechItem } from '../../types/types';
import { ProjectCard } from '../ui/project/ProjectCard';
import type { ProjectsText } from '../../types/cvData';

// LAZY LOAD of pop-up
const LazyProjectDetailsPopUp = React.lazy(() => import('../ui/project/ProjectDetailsPopUp'));

interface ProjectsSectionProps {
  projectsText: ProjectsText;
  projectsData: Project[];
  techItemsData?: TechItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projectsText, 
  projectsData = [], 
  techItemsData = [] 
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const techMap = useMemo(() => {
    return new Map<string, TechItem>(techItemsData.map((tech) => [tech.id, tech]));
  }, [techItemsData]);

  const selectedProject = useMemo(() => {
    if (!selectedProjectId) return null;
    return projectsData.find(proj => proj.id === selectedProjectId) || null;
  }, [selectedProjectId, projectsData]);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProjectId(project.id);
  }, []);

  const handleCloseProjectDetails = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectId(null);
      }
    };

    if (selectedProjectId) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProjectId]);

  return (
    <section className="projects-container py-12 px-4 md:px-8" id="projects" aria-labelledby="projects-heading">
      <header className="projects-header mb-10 text-center">
        <h2 id="projects-heading" className="text-3xl font-bold mb-4">
          {projectsText.title}
        </h2>
      </header>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            techItemsMap={techMap}
            onClick={handleSelectProject}
          />
        ))}
      </div>

      {selectedProject && (
        <Suspense fallback={<div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center"><div className="animate-spin text-white">Ładowanie...</div></div>}>
          <LazyProjectDetailsPopUp 
            project={selectedProject}
            techItemsMap={techMap}
            onClose={handleCloseProjectDetails} 
          />
        </Suspense>
      )}
    </section>
  );
};