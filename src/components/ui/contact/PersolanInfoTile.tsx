import React, { useState } from 'react';

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  isSensitive?: boolean; // Hidden under "Show" button if true
}

interface PersonalInfoTileProps {
  item: ContactItem;
  showText: string;
}

export const PersonalInfoTile: React.FC<PersonalInfoTileProps> = ({ item, showText }) => {
  const [isRevealed, setIsRevealed] = useState(!item.isSensitive);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReveal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsRevealed(true);
    setIsAnimating(true);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const content = (
    <>
      <div className="contact-row-icon">{item.icon}</div>
      <div className="contact-row-info">
        <span className="contact-row-label">{item.label}</span>
        
        {isRevealed ? (
          <span 
            className={`contact-row-value ${isAnimating ? 'animate-fade-in' : ''}`}
            style={isAnimating ? { animation: 'fadeIn 0.3s ease-in' } : {}}
          >
            {item.value}
          </span>
        ) : (
          <button 
            type="button"
            onClick={handleReveal} 
            className="contact-reveal-button toggle-hidden-btn"
          >
            {showText}
          </button>
        )}
      </div>
    </>
  );

  if (item.href && isRevealed) {
    const isExternal = item.href.startsWith('http');
    return (
      <a
        href={item.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="contact-row-item contact-row-link"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="contact-row-item">
      {content}
    </div>
  );
};

export default PersonalInfoTile;