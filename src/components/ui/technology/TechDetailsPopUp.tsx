import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import type { TechItem, Project } from '../../../types/types';

interface TechDetailsPopUpProps {
  tech: TechItem;
  projects: Project[];
  usedInProjectsLabel : string
  seeLabel : string
  onClose: () => void;
  onSelectProject?: (project: string) => void;
}

export const TechDetailsPopUp: React.FC<TechDetailsPopUpProps> = React.memo(({ 
  tech, projects, usedInProjectsLabel, seeLabel, onClose, onSelectProject
 }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleProjectClick = (projectId: string) => {
    // Call the onSelectProject callback if provided
    if (onSelectProject) {
      onSelectProject(projectId);
    }
  }
  
  const modalContent = (
    <div 
      className="tech-details-overlay animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tech-popup-title"
    >
      <aside 
        className="tech-details-popup" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tech-details-popup-header">
          <h3 id="tech-popup-title" className="tech-details-popup-title">{tech.name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="tech-details-popup-close-btn"
          >
            <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
          </button>
        </div>
        
        <p className="tech-details-popup-description">
          {tech.description}
        </p>

        {projects.length > 0 && (
          <div className="tech-details-popup-projects-section">
            <span className="tech-details-popup-projects-label">
              {usedInProjectsLabel}
            </span>
            <ul className="tech-details-popup-projects-list">
              {projects.map((proj) => (
                <li key={proj.id}>
                  <button
                    type="button"
                    onClick={() => handleProjectClick(proj.id)}
                    className="tech-details-popup-project-tag"
                  >
                    {seeLabel}: {proj.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );

  return createPortal(modalContent, document.body);
});

TechDetailsPopUp.displayName = 'TechDetailsPopUp';