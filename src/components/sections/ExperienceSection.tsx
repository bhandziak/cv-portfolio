import React, { useState, useMemo, useCallback } from 'react';
import type { ExperienceItem } from '../../types/types';
import { ExperienceCard } from '../ui/experience/ExperienceCard';

interface ExperienceSectionProps {
  title: string;
  experiencesData: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  experiencesData = [],
}) => {
  const [showHidden, setShowHidden] = useState(false);

  const hiddenCount = useMemo(() => {
    return experiencesData.filter((exp) => exp.isVisible === false).length;
  }, [experiencesData]);

  const displayedExperiences = useMemo(() => {
    if (showHidden) return experiencesData;
    return experiencesData.filter((exp) => exp.isVisible !== false);
  }, [experiencesData, showHidden]);

  const handleToggleShowHidden = useCallback(() => {
    setShowHidden((prev) => !prev);
  }, []);

  if (experiencesData.length === 0) return null;

  return (
    <section className="tech-stack-container experience-container" id="experience" aria-labelledby="experience-heading">
      <header className="tech-stack-header">
        <h2 id="experience-heading" className="second-title">
          {title}
        </h2>
      </header>

      <div className="experience-list-container flex-column-layout">
        {displayedExperiences.map((exp) => (
          <ExperienceCard 
            key={exp.id} 
            experience={exp} 
          />
        ))}
      </div>
      {hiddenCount > 0 && (
          <button
            type="button"
            className="toggle-hidden-btn"
            onClick={handleToggleShowHidden}
            aria-expanded={showHidden}
          >
            {showHidden ? 'Ukryj archiwalne' : `Pokaż ukryte (${hiddenCount})`}
          </button>
        )}
    </section>
  );
};

export default ExperienceSection;