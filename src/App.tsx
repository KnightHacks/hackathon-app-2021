import { registerRootComponent } from 'expo';
import React from 'react';
import RootStack from './components/Navigation';
// @ts-ignore
// import {  } from 'react-native-dotenv';
/**
 * The Main App.
 */
export function App(): JSX.Element {
  return <RootStack />;
}

export default registerRootComponent(App);
