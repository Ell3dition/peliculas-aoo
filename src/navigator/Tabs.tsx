/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsANDROID />;
};

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTab} from './TopTab';

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsANDROID = () => {
  return (
    <BottomTabAndroid.Navigator
      inactiveColor="white"
      activeColor="white"
      sceneAnimationType="shifting"
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bug-outline';
              break;
            case 'Tab2Screen':
              iconName = 'body-outline';
              break;
            case 'StackNavigator':
              iconName = 'airplane-outline';
              break;
          }
          return (
            <Icon
              name={iconName}
              size={25}
              color={focused ? colors.secondary : color}
            />
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTab}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },

        tabBarIcon: ({color}) => {
          console.log(route.name);
          let iconName = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTab}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
