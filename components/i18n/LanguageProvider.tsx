'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Language } from './translations';

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  copy: typeof translations.ja | typeof translations.en;
} | null>(null);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>('ja');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('plenum-language');
      if (saved === 'ja' || saved === 'en') updateLanguage(saved);
    } catch { /* Language selection still works when storage is unavailable. */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(next: Language) {
    updateLanguage(next);
    try { localStorage.setItem('plenum-language', next); } catch { /* Optional persistence. */ }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage requires LanguageProvider');
  return context;
}
