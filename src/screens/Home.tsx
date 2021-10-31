import React from 'react';
import { View } from 'react-native';
import CountDown from '../components/CountDown';
import Schedule from './Schedule';

/**
 * The Home page for knight hacks.
 */
function Home(): JSX.Element {
  return (
    <View>
      <CountDown />
      <Schedule />
    </View>
  );
}

export default Home;
