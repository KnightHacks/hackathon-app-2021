import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './src/components/Navigation';

/**
 * The Main App.
 * @returns {JSX.Element}
 */
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}