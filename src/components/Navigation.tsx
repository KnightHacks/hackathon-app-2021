/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import FAQ from '../screens/FAQ';
import Register from '../screens/Register';
import Schedule from '../screens/Schedule';
import Sponsors from '../screens/Sponsors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

/**
 * The root navigation stack of the application.
 */
function RootStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="book" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="FAQ"
          component={FAQ}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="comment-question-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-check"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="schedule" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sponsors"
          component={Sponsors}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="team" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
