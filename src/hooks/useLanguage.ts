import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage has to be used within a "LanguageProvider"');
  }
  return context;
};