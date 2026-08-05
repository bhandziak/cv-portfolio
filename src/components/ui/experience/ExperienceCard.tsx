import { memo, useState, useCallback, useRef } from 'react';
import type { ExperienceItem } from '../../../types/types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard = memo(function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <article className="experience-card">
      <div 
        className="experience-card-header"
        onClick={toggleExpand}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
      >
        <div className="experience-header-main">
          <h3 className="tech-category-title experience-title">
            {experience.role} <span className="experience-company">@ {experience.company}</span>
          </h3>
          <span className="experience-period">{experience.period}</span>
        </div>
      </div>

      <div 
        ref={contentRef}
        className='experience-card-content'
      >
        <div className="experience-content-inner">
          <ul className="experience-description">
            {experience.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>

          {experience.technologies.length > 0 && (
            <div className="tech-category-items">
              {experience.technologies.map((tech) => (
                <span key={tech} className="tech-item-btn notclickable">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
});