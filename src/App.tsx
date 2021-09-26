import React from 'react';
import Router from './Router';
import ThemeContextProvider from './ThemeContextProvider';
import firebase from 'firebase/app';
import { firebaseConfig } from './config/firebase';

const App: React.FC = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
};

export default App;
