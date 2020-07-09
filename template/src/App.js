import React from 'react';
import firebase from 'firebase/app';
// import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd'

import firebaseConfig from '../../build/firebaseConfig';
import { AuthProvider } from './lib/useAuth';
import Router from './Router';
import ThemeProvider from './ThemeProvider';

firebase.initializeApp(firebaseConfig);

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <AuthProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  </DndProvider>
);

export default App;
