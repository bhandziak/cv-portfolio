import { memo } from 'react';
import type { TechCategory, TechItem } from '../../../types/types';
import { TechItemButton } from './TechItemButton';

interface TechCategoryCardProps {
  category: TechCategory;
  selectedTechId: string | null;
  onSelectTech: (techId: string) => void;
  techItemsMap: Map<string, TechItem>;
}

export const TechCategoryCard = memo(function TechCategoryCard({
  category,
  selectedTechId,
  onSelectTech,
  techItemsMap,
}: TechCategoryCardProps) {
  return (
    <article className="tech-category-card">
      <div>
        <h3 className="tech-category-title">
          {category.title}
        </h3>
        <div className="tech-category-items">
          {category.technologyIds.map((techId) => {
            const item = techItemsMap.get(techId);
            if (!item) return null;

            return (
              <TechItemButton
                key={item.id}
                item={item}
                isSelected={selectedTechId === item.id}
                onClick={() => onSelectTech(item.id)}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
});