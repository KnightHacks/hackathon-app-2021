import { registerRootComponent } from 'expo';
import React from 'react';
import RootStack from './components/Navigation';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

/**
 * The Main App.
 */
export function App(): JSX.Element {
  return <RootStack />;
}

export default registerRootComponent(App);
