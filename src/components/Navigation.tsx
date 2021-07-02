import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import FAQ from '../screens/FAQ';
import Register from '../screens/Register';
import Schedule from '../screens/Schedule';
import Sponsors from '../screens/Sponsors';

const Stack = createStackNavigator();

/**
 * The root navigation stack of the application.
 */
function RootStack(): JSX.Element {
    return (
        <Stack.Navigator
         initialRouteName="Home"
        >
            <Stack.Screen
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="About"
              component={About}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
            />
            <Stack.Screen
              name="Register"
              component={Register}
            />
            <Stack.Screen
              name="Schedule"
              component={Schedule}
            />
            <Stack.Screen
              name="Sponsors"
              component={Sponsors}
            />
        </Stack.Navigator>
    );
}

export default RootStack;