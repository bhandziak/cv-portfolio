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
// Use localStorage to persist the user's language preference
    const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    return saved === 'en' || saved === 'pl' ? saved : 'pl';
  });

  const [cvData, setCvData] = useState<CVData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  // Cache loaded JSON data
  const cache = useRef<Map<Language, CVData>>(new Map());

  // Load language data dynamically based on the selected language
  const loadLanguageData = async (targetLang: Language) => {
    if (cache.current.has(targetLang)) {
      setCvData(cache.current.get(targetLang)!);
      return;
    }

    setIsLoading(true);
    try {
      const dataModule = await import(`../data/${targetLang}.json`);
      const data: CVData = dataModule.default;

      cache.current.set(targetLang, data);
      setCvData(data);
    } catch (error) {
      console.error(`Nie udało się załadować danych dla języka: ${targetLang}`, error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLanguageData(language);
  }, []);

  // --- Method to change the language ---
  const changeLanguage = (newLang: Language) => {
    if (newLang === language) return;

    localStorage.setItem(STORAGE_KEY, newLang);
    setLanguage(newLang);

    startTransition(async () => {
      await loadLanguageData(newLang);
    });
  };

  return (
    <LanguageContext value={{ language, cvData, isLoading, isPending, changeLanguage }}>
      {children}
    </LanguageContext>
  );
};