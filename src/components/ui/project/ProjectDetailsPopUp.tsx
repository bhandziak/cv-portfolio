import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCode, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import type { Project, TechItem } from '../../../types/types';
import { TechItemButton } from '../technology/TechItemButton';

interface ProjectDetailsPopUpProps {
  project: Project;
  techItemsMap: Map<string, TechItem>;
  onClose: () => void;
}

const ProjectDetailsPopUp: React.FC<ProjectDetailsPopUpProps> = React.memo(({ 
  project, 
  techItemsMap, 
  onClose 
}) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalStyle; };
  }, []);

  const modalContent = (
    <div 
      className="tech-details-overlay animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-popup-title"
    >
      <aside 
        className="tech-details-popup" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tech-details-popup-header">
          <h3 id="tech-popup-title" className="text-2xl font-bold">{project.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="tech-details-popup-close-btn"
            aria-label="Zamknij podgląd szczegółów"
          >
            <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
          </button>
        </div>
        
        <p className="tech-details-popup-description">
          {project.description || 'Brak dodatkowego opisu.'}
        </p>

        <div className="tech-details-popup-projects-section">
            <span className="tech-details-popup-projects-label">
              Zastosowane technologie:
            </span>
          <div className="flex flex-wrap gap-2">
            {project.technologyIds?.map((techId) => {
              const techItem = techItemsMap.get(techId);
              return techItem ? (
                <span key={techItem.id} className="tech-item-btn notclickable">
                  {techItem.name}
                </span>
              ) : null;
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
          {project.githubURL && (
            <a 
              href={project.githubURL} 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex-1 flex justify-center items-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={faCode} /> Kod na GitHubie
            </a>
          )}
          {project.demoURL && (
            <a 
              href={project.demoURL} 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex-1 flex justify-center items-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Zobacz Demo
            </a>
          )}
        </div>
      </aside>
    </div>
  );

  return createPortal(modalContent, document.body);
});

ProjectDetailsPopUp.displayName = 'ProjectDetailsPopUp';

export default ProjectDetailsPopUp;