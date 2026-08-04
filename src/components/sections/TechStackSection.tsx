import React, { useState, useCallback, useEffect } from 'react';
import type { TechStackData, TechItem } from '../../types/types';
import { TechCategoryCard } from '../ui/TechCategoryCard';
import { TechDetailsPopUp } from '../ui/TechDetailsPopUp';

interface TechStackSectionProps {
  data: TechStackData;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ data }) => {
  const { title, description, techCategories } = data;
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const handleSelectTech = useCallback((item: TechItem) => {
    setSelectedTech((prev) => (prev?.name === item.name ? null : item));
  }, []);

  const handleCloseTechDetails = useCallback(() => {
    setSelectedTech(null);
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
        <TechDetailsPopUp 
          tech={selectedTech} 
          onClose={handleCloseTechDetails} 
        />
      )}
    </section>
  );
};

export default TechStackSection;