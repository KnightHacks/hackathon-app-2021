import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './src/components/Navigation';

/**
 * The Main App.
 */
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}