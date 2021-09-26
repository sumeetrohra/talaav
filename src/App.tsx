import React from 'react';
import Router from './Router';
import ThemeContextProvider from './ThemeContextProvider';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
};

export default App;
