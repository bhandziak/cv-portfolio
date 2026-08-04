import React, { memo } from 'react';
import type { TechCategory, TechItem } from '../../types/types';
import { TechItemButton } from './TechItemButton';

interface TechCategoryCardProps {
  category: TechCategory;
  selectedTech: TechItem | null;
  onSelectTech: (item: TechItem) => void;
}

export const TechCategoryCard = memo(function TechCategoryCard({
  category,
  selectedTech,
  onSelectTech,
}: TechCategoryCardProps) {
  return (
    <article className="tech-category-card">
      <div>
        <h3 className="tech-category-title">
          {category.title}
        </h3>
        <div className="tech-category-items">
          {category.skills.map((skill) => (
            <TechItemButton
              key={skill.name}
              item={skill}
              isSelected={selectedTech?.name === skill.name}
              onClick={onSelectTech}
            />
          ))}
        </div>
      </div>
    </article>
  );
});