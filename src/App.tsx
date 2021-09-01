import { registerRootComponent } from 'expo';
import React from 'react';
import RootStack from './components/Navigation';
import * as Sentry from 'sentry-expo';
// @ts-ignore
import { SENTRY_DSN } from 'react-native-dotenv';

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true,
});

/**
 * The Main App.
 */
export function App(): JSX.Element {
  return <RootStack />;
}

export default registerRootComponent(App);
