import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

interface SiteContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: typeof translations.ar;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('daralamarah_lang') as Language;
    return saved === 'en' || saved === 'ar' ? saved : 'ar';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('daralamarah_theme') as Theme;
    return saved === 'dark' || saved === 'light' ? saved : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('daralamarah_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('daralamarah_lang', lang);
  }, [lang]);

  const setLang = (newLang: Language) => setLangState(newLang);
  const toggleLang = () => setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'));

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);
  const toggleTheme = () => setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));

  const t = translations[lang];

  return (
    <SiteContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
        t,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = (): SiteContextType => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
