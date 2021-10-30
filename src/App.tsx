import { registerRootComponent } from 'expo';
import React, { useEffect } from 'react';
import RootStack from './components/Navigation';
import * as Sentry from 'sentry-expo';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayjs from 'dayjs';
import * as Calendar from 'expo-calendar';
// @ts-ignore
import { SENTRY_DSN } from 'react-native-dotenv';
import api from './api/api';

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true,
});

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

/**
 * The Main App.
 */
export function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      const res = await api.getEvents();
      console.log(res);
      await Calendar.requestCalendarPermissionsAsync();
    })();
  }, []);

  return <RootStack />;
}

export default registerRootComponent(App);
