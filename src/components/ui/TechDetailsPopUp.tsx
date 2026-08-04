import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { TechItem } from '../../types/cv';

interface TechDetailsPopUpProps {
  tech: TechItem;
  onClose: () => void;
}

export const TechDetailsPopUp: React.FC<TechDetailsPopUpProps> = React.memo(({ tech, onClose }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

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
            aria-label="Zamknij podgląd szczegółów"
          >
            Zamknij (Esc)
          </button>
        </div>
        
        <p className="tech-details-popup-description">
          {tech.description || 'Brak dodatkowego opisu dla tej technologii.'}
        </p>

        {tech.projects && tech.projects.length > 0 && (
          <div className="tech-details-popup-projects-section">
            <span className="tech-details-popup-projects-label">
              Wykorzystane w projektach:
            </span>
            <ul className="tech-details-popup-projects-list">
              {tech.projects.map((proj) => (
                <li key={proj.id}>
                  <span className="tech-details-popup-project-tag">
                    {proj.title}
                  </span>
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