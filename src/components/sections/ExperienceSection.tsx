import type { ExperienceItem } from '../../types/types';
import { ExperienceCard } from '../ui/experience/ExperienceCard';
import { useState } from 'react';

interface ExperienceSectionProps {
  title: string;
  showMoreLabel: string;
  showLessLabel: string;
  experiencesData?: ExperienceItem[];
}

export const ExperienceSection = ({
  title,
  showMoreLabel,
  showLessLabel,
  experiencesData = [],
}: ExperienceSectionProps) => {
  const [showHidden, setShowHidden] = useState(false);

  if (experiencesData.length === 0) return null;

  const hiddenExperiences = experiencesData.filter((exp) => exp.isVisible === false);
  const hiddenCount = hiddenExperiences.length;

  const displayedExperiences = showHidden
    ? experiencesData
    : experiencesData.filter((exp) => exp.isVisible !== false);

  return (
    <section 
      className="tech-stack-container experience-container" 
      aria-labelledby="experience-heading"
    >
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
          onClick={() => setShowHidden((prev) => !prev)}
          aria-expanded={showHidden}
        >
          {showHidden ? showLessLabel : `${showMoreLabel} (${hiddenCount})`}
        </button>
      )}
    </section>
  );
};

export default ExperienceSection;