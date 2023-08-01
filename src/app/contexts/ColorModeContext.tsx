import { createContext, useEffect, useState } from 'react';
import { localStorageKeys } from '../config/env';

interface ColorModeContextValue {
  theme: 'dark' | 'light';
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext({} as ColorModeContextValue);

function getCurrentColorMode() {
  if (
    localStorage.getItem(localStorageKeys.COLOR_MODE) === 'dark' ||
    (!(localStorageKeys.COLOR_MODE in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark';
  } else {
    return 'light';
  }
}

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setColorMode] = useState<'dark' | 'light'>(
    getCurrentColorMode(),
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem(localStorageKeys.COLOR_MODE, theme);
  }, [theme]);

  function toggleColorMode() {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ColorModeContext.Provider value={{ theme, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
