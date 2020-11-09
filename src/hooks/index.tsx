import React from 'react';
import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DrawerProvider>{children}</DrawerProvider>
  </AuthProvider>
);

export default AppProvider;
