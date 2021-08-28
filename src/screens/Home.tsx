import React from 'react';
import { Text, View } from 'react-native';
import BaseStyles from '../styles/baseStyles';

/**
 * The Home page for knight hacks.
 */
function Home(): JSX.Element {
  return (
    <View style={BaseStyles.expandedContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;
