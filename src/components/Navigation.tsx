/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import About from '../screens/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StatusBar, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Sponsors from '../screens/Sponsors';
import Schedule from '../screens/Schedule';
// @ts-ignore
import koipond from '../assets/KoiFishPond.png';

const Tab = createBottomTabNavigator();

/**
 * The root navigation stack of the application.
 */
function RootStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700',
            alignSelf: 'flex-start',
            color: 'white',
          },
          headerStyle: {
            height: 100,
          },
          headerBackground: () => (
            <View style={{ backgroundColor: 'black' }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={koipond}
              />
              <StatusBar barStyle="light-content" />
            </View>
          ),
          headerTitleAlign: 'left',
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
          component={Schedule}
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
