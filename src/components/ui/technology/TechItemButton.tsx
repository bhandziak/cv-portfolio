import { memo } from 'react';
import { type TechItem } from '../../../types/types';

interface TechItemButtonProps {
  item: TechItem;
  isSelected: boolean;
  onClick: (item: TechItem) => void;
}

export const TechItemButton = memo(function TechItemButton({
  item,
  isSelected,
  onClick,
}: TechItemButtonProps) {
  const { name, highlighted } = item;

  const classNames = [
    'tech-item-btn',
    highlighted ? 'tech-item-btn--highlighted' : '',
    isSelected ? 'tech-item-btn--active' : '',
  ]
    .join(' ');

  return (
    <button
      type="button"
      className={classNames}
      onClick={() => onClick(item)}
      aria-pressed={isSelected}
    >
      <span>{name}</span>
    </button>
  );
});
