import { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../theme';

const ThemeContext = createContext({} as any);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeConfig = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};
