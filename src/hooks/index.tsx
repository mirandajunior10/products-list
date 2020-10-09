import React from 'react';

import { ItemsProvider } from './items';

const AppProvider: React.FC = ({ children }) => (
  <ItemsProvider>{children}</ItemsProvider>
);

export default AppProvider;
