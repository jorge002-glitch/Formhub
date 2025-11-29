import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext';
import AppNavigator from './navigation/AppNavigator';

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0f1115',
    card: '#12151b',
    text: '#e6eef8',
    border: '#1c2230',
    primary: '#08b6d8',
  },
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={DarkTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}