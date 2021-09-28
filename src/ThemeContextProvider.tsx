import React, { ReactNode, useState } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

interface IThemeContextProvider {
  children: ReactNode;
}

export type ThemeContextType = {
  setTheme: any;
};

export const ThemeSwitcherContext = React.createContext<ThemeContextType>({ setTheme: null });

const ThemeContextProvider: React.FC<IThemeContextProvider> = ({ children }) => {
  const [theme, setTheme] = useState({
    ...DefaultTheme,
    roundness: 4,
    colors: {
      ...DefaultTheme.colors,
    },
  });

  return (
    <ThemeSwitcherContext.Provider value={{ setTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export default ThemeContextProvider;
