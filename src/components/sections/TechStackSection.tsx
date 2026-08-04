import React, { useState, useCallback, useEffect } from 'react';
import type { TechStackData, TechItem } from '../../types/cv';
import { TechCategoryCard } from '../ui/TechCategoryCard';

interface TechStackSectionProps {
  data: TechStackData;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ data }) => {
  const { title, description, techCategories } = data;
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const handleSelectTech = useCallback((item: TechItem) => {
    setSelectedTech((prev) => (prev?.name === item.name ? null : item));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTech(null);
      }
    };

    if (selectedTech) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTech]);

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
            selectedTech={selectedTech}
            onSelectTech={handleSelectTech}
          />
        ))}
      </div>

      {selectedTech && (
        <aside 
          className="tech-details-box animate-fadeIn" 
          aria-live="polite"
          aria-label={`Szczegóły technologii ${selectedTech.name}`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-indigo-400">{selectedTech.name}</h3>
            <button
              type="button"
              onClick={() => setSelectedTech(null)}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-1"
              aria-label="Zamknij podgląd szczegółów"
            >
              Zamknij (Esc)
            </button>
          </div>
          
          <p className="text-sm text-slate-300 leading-relaxed">
            {selectedTech.description || 'Brak dodatkowego opisu dla tej technologii.'}
          </p>

          {selectedTech.projects && selectedTech.projects.length > 0 && (
            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Wykorzystane w projektach:
              </span>
              <ul className="flex flex-wrap gap-2">
                {selectedTech.projects.map((proj) => (
                  <li key={proj.id}>
                    <span className="inline-block text-xs px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 font-medium">
                      {proj.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      )}
    </section>
  );
};

export default TechStackSection;