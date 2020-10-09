import React from 'react';
import Dashboard from './screens/Dashboard';
import AppProvider from './hooks';

const App: React.FC = () => (
  <AppProvider>
    <Dashboard />
  </AppProvider>
);

export default App;
