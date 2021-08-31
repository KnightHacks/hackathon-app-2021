import { registerRootComponent } from 'expo';
import React, { useEffect } from 'react';
import RootStack from './components/Navigation';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayjs from 'dayjs';
import * as Calendar from 'expo-calendar';

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

/**
 * The Main App.
 */
export function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      await Calendar.requestCalendarPermissionsAsync();
    })();
  }, []);

  return <RootStack />;
}

export default registerRootComponent(App);
