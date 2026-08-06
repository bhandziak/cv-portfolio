import React, { useState, useCallback, useEffect, useMemo } from 'react';
import type { TechStackData, TechItem, Project } from '../../types/types';
import { TechCategoryCard } from '../ui/technology/TechCategoryCard';
import { TechDetailsPopUp } from '../ui/technology/TechDetailsPopUp';

interface TechStackSectionProps {
  techStackData: TechStackData;
  techItemsData?: TechItem[];
  projectsData?: Project[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ 
  techStackData, 
  techItemsData = [], 
  projectsData = [] 
}) => {
  const { title, description, techCategories } = techStackData;

  const [selectedTechId, setSelectedTechId] = useState<string | null>(null);

  // TECHNOLOGIES AND PROJECTS MAPS
  const techMap = useMemo(() => {
    return new Map<string, TechItem>(techItemsData.map((tech) => [tech.id, tech]));
  }, [techItemsData]);

  const projectsMap = useMemo(() => {
    return new Map<string, Project>(projectsData.map((proj) => [proj.id, proj]));
  }, [projectsData]);

  // SELECTED TECH AND PROJECTS
  const selectedTech = selectedTechId ? techMap.get(selectedTechId) ?? null : null;

  const selectedProjects = useMemo(() => {
    if (!selectedTech?.projectIds) return [];
    return selectedTech.projectIds
      .map((id) => projectsMap.get(id))
      .filter((proj): proj is Project => proj !== undefined);
  }, [selectedTech, projectsMap]);

  // HANDLERS
  const handleSelectTech = useCallback((techId: string) => {
    setSelectedTechId((prevId) => (prevId === techId ? null : techId));
  }, []);

  const handleCloseTechDetails = useCallback(() => {
    setSelectedTechId(null);
  }, []);

  // SCROLL TO PROJECT CARD AND HIGHLIGHT
  const handleSelectProject = useCallback((projectId: string) => {
    // Close the tech details popup first
    setSelectedTechId(null);

    // Scroll to the project card and highlight it
    requestAnimationFrame(() => {
      setTimeout(() => {
        const targetElement = document.getElementById(`project-${projectId}`);
        if (!targetElement) return;

        const triggerHighlight = () => {
          targetElement.classList.add('project-card-highlight');
          
          targetElement.addEventListener(
            'animationend',
            () => targetElement.classList.remove('project-card-highlight'),
            { once: true }
          );
        };

        if ('onscrollend' in window) {
          const handleScrollEnd = () => {
            triggerHighlight();
            window.removeEventListener('scrollend', handleScrollEnd);
          };
          window.addEventListener('scrollend', handleScrollEnd, { once: true });
        } else {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                setTimeout(triggerHighlight, 150);
                observer.disconnect();
              }
            },
            { threshold: 0.6 }
          );
          observer.observe(targetElement);
        }

        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTechId(null);
      }
    };

    if (selectedTechId) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTechId]);

  return (
    <section className="tech-stack-container" id="tech-stack" aria-labelledby="tech-stack-heading">
      <header className="tech-stack-header">
        <h2 id="tech-stack-heading" className="second-title">
          {title}
        </h2>
        <p className="second-description">
          {description}
        </p>
      </header>

      <div className="tech-stack-flex-container">
        {techCategories.map((category) => (
          <TechCategoryCard
            key={category.id}
            category={category}
            selectedTechId={selectedTechId}
            techItemsMap={techMap}
            onSelectTech={handleSelectTech}
          />
        ))}
      </div>

      {selectedTech && (
        <TechDetailsPopUp 
          tech={selectedTech}
          projects={selectedProjects} 
          onClose={handleCloseTechDetails}
          onSelectProject={handleSelectProject} 
        />
      )}
    </section>
  );
};

export default TechStackSection;