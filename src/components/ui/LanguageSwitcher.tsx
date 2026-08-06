import React from 'react';
import { useLanguage} from '../../hooks/useLanguage';

export const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage, isPending } = useLanguage();

  return (
    <div 
      className={`lang-switcher-container ${isPending ? 'lang-switcher-container--pending' : ''}`}
      role="group"
    >
      <button
        type="button"
        onClick={() => changeLanguage('pl')}
        disabled={language === 'pl' || isPending}
        aria-pressed={language === 'pl'}
        className={`lang-switcher-btn ${language === 'pl' ? 'lang-switcher-btn--active' : ''}`}
      >
        PL
      </button>

      <button
        type="button"
        onClick={() => changeLanguage('en')}
        disabled={language === 'en' || isPending}
        aria-pressed={language === 'en'}
        className={`lang-switcher-btn ${language === 'en' ? 'lang-switcher-btn--active' : ''}`}
      >
        EN
      </button>
    </div>
  );
};