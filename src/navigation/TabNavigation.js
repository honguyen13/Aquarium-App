import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AquariumScreen from '../screens/AquariumScreen';
import SettingScreen from '../screens/SettingScreen';
import TrickScreen from '../screens/TrickScreen';
import AquariumNavigation from './AquariumNavigation';

import {theme} from '../constants';
import CataloguesScreen from '../screens/CataloguesScreen';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Catalogues"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Catalogues"
        component={CataloguesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/images/home.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? theme.colors.blue : theme.colors.black,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AquariumNavigation"
        component={AquariumNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/images/fishbowl.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? theme.colors.blue : theme.colors.black,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trick"
        component={TrickScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/images/book.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? theme.colors.blue : theme.colors.black,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/images/setting.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? theme.colors.blue : theme.colors.black,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 16,
    right: 16,
    bottom: 16,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#CCCCCC',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
  },
});
