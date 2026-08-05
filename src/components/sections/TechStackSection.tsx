import React, { useState, useCallback, useEffect, useMemo } from 'react';
import type { TechStackData, TechItem, Project } from '../../types/types';
import { TechCategoryCard } from '../ui/TechCategoryCard';
import { TechDetailsPopUp } from '../ui/TechDetailsPopUp';

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
        />
      )}
    </section>
  );
};

export default TechStackSection;