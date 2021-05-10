import React from 'react';
import { Text, View } from 'react-native';
import BaseStyles from '../styles/baseStyles';

/**
 * The about page for knight hacks.
 * 
 * @returns {JSX.Element}
 */
function About() {
    return (
        <View style={BaseStyles.expandedContainer}>
            <Text>About Screen</Text>
        </View>
    );
}

export default About;