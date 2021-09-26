import React, { ReactNode, SetStateAction, useState } from 'react';
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';

interface IThemeContextProvider {
  children: ReactNode;
}

export type ThemeContextType = {
  setTheme: any;
};

export const ThemeSwitcherContext = React.createContext<ThemeContextType>({ setTheme: null });

const ThemeContextProvider: React.FC<IThemeContextProvider> = ({ children }) => {
  const [theme, setTheme] = useState({
    ...DarkTheme,
    roundness: 20,
    dark: true,
    colors: {
      ...DarkTheme.colors,
    },
  });

  return (
    <ThemeSwitcherContext.Provider value={{ setTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export default ThemeContextProvider;
