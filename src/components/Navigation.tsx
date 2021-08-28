/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Sponsors from '../screens/Sponsors';

const Tab = createBottomTabNavigator();

/**
 * The root navigation stack of the application.
 */
function RootStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarIconStyle: {
            height: 50,
          },
          tabBarStyle: {
            backgroundColor: 'white',
            alignContent: 'center',
            position: 'absolute',
            bottom: 25,
            left: 45,
            right: 45,
            borderRadius: 45,
            height: 60,
            paddingBottom: 0,
          },
        }}
      >
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
