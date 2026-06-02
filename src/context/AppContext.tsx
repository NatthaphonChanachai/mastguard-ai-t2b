'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Lang } from '@/lib/translations';

type Theme = 'dark' | 'light';

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
  lang: 'th',
  setLang: () => {},
  theme: 'dark',
  toggleTheme: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('th');
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const savedLang = localStorage.getItem('mg-lang') as Lang | null;
    const savedTheme = localStorage.getItem('mg-theme') as Theme | null;
    if (savedLang === 'th' || savedLang === 'en') setLangState(savedLang);
    if (savedTheme === 'dark' || savedTheme === 'light') setThemeState(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('mg-lang', l);
    document.documentElement.lang = l;
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mg-theme', next);
      return next;
    });
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
