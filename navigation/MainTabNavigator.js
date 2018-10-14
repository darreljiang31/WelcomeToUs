import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import WhereDoYouLiveScreen from '../screens/WhereDoYouLiveScreen'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ButtonScreen from '../screens/ButtonScreen';
import HelloScreen from '../screens/Hello';
import MainScreen from '../screens/MainScreen';
import MentorScreen from '../screens/MentorScreen';
import MentorProfileScreen from '../screens/MentorProfileScreen';

const ButtonStack = createStackNavigator({
  Button: HelloScreen,
})

ButtonStack.navigationOptions = {
  tabBarLabel: 'Button',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const HomeStack = createStackNavigator({
  Main: MainScreen,
  Mentor: MentorScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Main',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const WhereDoYouLiveStack = createStackNavigator({
  WhereDoYouLive: WhereDoYouLiveScreen,
})

const MentorProfileStack = createStackNavigator({
  Profile: MentorProfileScreen,
})

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  WhereDoYouLiveStack,
  MentorProfileStack,
  BioStack,
  HomeStack,
  LinksStack,
  SettingsStack,
  ButtonStack,
});
