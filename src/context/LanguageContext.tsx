import React, { 
  createContext, 
  useState, 
  useEffect, 
  useTransition, 
  useRef, 
  type ReactNode 
} from 'react';
import type { CVData } from '../types/cvData';

export type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  cvData: CVData | null;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  const cache = useRef<Map<Language, CVData>>(new Map());

  // Load language data from ts files
const loadLanguageData = async (targetLang: Language) => {
    if (cache.current.has(targetLang)) {
      setCvData(cache.current.get(targetLang)!);
      return;
    }

    setIsLoading(true);
    try {
      const dataModule = await import(`../data/cv-data-${targetLang}`);
      const data: CVData = dataModule.cvData || dataModule.default;

      cache.current.set(targetLang, data);
      setCvData(data);
    } catch (error) {
      console.error(`Failed to load data for language: ${targetLang}`, error);
    } finally {
      setIsLoading(false);
    }
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
    <LanguageContext value={{ language, cvData, isLoading, isPending, changeLanguage }}>
      {children}
    </LanguageContext>
  );
};