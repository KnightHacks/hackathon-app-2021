import React from 'react';
import { ScrollView } from 'react-native';
import CountDown from '../components/CountDown';
import Schedule from './Schedule';

/**
 * The Home page for knight hacks.
 */
function Home(): JSX.Element {
  return (
    <ScrollView contentInset={{ bottom: 30 }}>
      <CountDown />
      <Schedule />
    </ScrollView>
  );
}

export default Home;
