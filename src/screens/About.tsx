import React from 'react';
import { Text, View } from 'react-native';
import BaseStyles from '../styles/baseStyles';

/**
 * The about page for knight hacks.
 */
function About(): JSX.Element {
    return (
        <View style={BaseStyles.expandedContainer}>
            <Text>About Screen</Text>
        </View>
    );
}

export default About;