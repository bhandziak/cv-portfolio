import React, { 
  createContext, 
  useState, 
  useEffect, 
  useTransition, 
  type ReactNode 
} from 'react';
import { cvData as cvDataPl } from '../data/cv-data-pl';
import { cvData as cvDataEn } from '../data/cv-data-en';
import type { CVData } from '../types/cvData';

const dataMap: Record<'pl' | 'en', CVData> = {
  pl: cvDataPl,
  en: cvDataEn,
};

export type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  cvData: CVData | null;
  isPending: boolean;
  changeLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'app_user_language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    return saved === 'en' || saved === 'pl' ? saved : 'pl';
  });

  const [cvData, setCvData] = useState<CVData | null>(null);
  const [isPending, startTransition] = useTransition();


  // Load language data from ts files
const loadLanguageData = (targetLang: 'pl' | 'en') => {
  const data = dataMap[targetLang];
  setCvData(data);
};

  useEffect(() => {
    loadLanguageData(language);
  }, [language]);

  const changeLanguage = (newLang: Language) => {
    if (newLang === language) return;

    localStorage.setItem(STORAGE_KEY, newLang);

    startTransition(async () => {
      setLanguage(newLang);
    });
  };

  return (
    <LanguageContext value={{ language, cvData, isPending, changeLanguage }}>
      {children}
    </LanguageContext>
  );
};