import { registerRootComponent } from 'expo';
import React from 'react';
import RootStack from './components/Navigation';

/**
 * The Main App.
 */
export function App(): JSX.Element {
  return <RootStack />;
}

export default registerRootComponent(App);