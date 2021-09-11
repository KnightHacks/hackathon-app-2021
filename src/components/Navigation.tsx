/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import About from '../screens/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, ImageBackground, View } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
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
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const currentTheme = isDarkTheme ? DarkTheme : DefaultTheme;
  const toggleImage = isDarkTheme ? 'moon' : 'sun';

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <NavigationContainer theme={currentTheme}>
      <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '700',
            alignSelf: 'flex-start',
            color: 'white',
          },
          headerBackground: () => (
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                opacity: 50,
              }}
              source={koipond}
            >
              <View
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.40)',
                  width: '100%',
                  height: '100%',
                  opacity: 50,
                }}
              />
            </ImageBackground>
          ),
          headerTitleAlign: 'left',
          tabBarShowLabel: false,
          tabBarIconStyle: {
            height: 50,
          },
          tabBarStyle: {
            alignContent: 'center',
            position: 'absolute',
            bottom: 25,
            left: 45,
            right: 45,
            borderRadius: 45,
            height: 60,
            paddingBottom: 0,
          },
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={toggleTheme}>
              <Feather name={toggleImage} size={30} color={'white'} />
            </TouchableOpacity>
          ),
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
