import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import WhereDoYouLiveScreen from '../screens/WhereDoYouLiveScreen';
import WhatBringsYouHereScreen from '../screens/WhatBringsYouHereScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import NumberOfChildrenScreen from '../screens/NumberOfChildrenScreen';
import BioScreen from '../screens/BioScreen';
import WeNeedToGetToKnowYouScreen from '../screens/WeNeedToGetToKnowYouScreen';
import UploadPhotoScreen from '../screens/UploadPhotoScreen'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ButtonScreen from '../screens/ButtonScreen';
import HelloScreen from '../screens/Hello';
import MainScreen from '../screens/MainScreen';
import MentorScreen from '../screens/MentorScreen';
import MentorProfileScreen from '../screens/MentorProfileScreen';
import SlideEntryScreen from '../screens/SliderEntry'

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
  Hello: HelloScreen,
  WhereDoYouLive: WhereDoYouLiveScreen,
  WhatBringsYouHere: WhatBringsYouHereScreen,
  NumberOfChildren:NumberOfChildrenScreen,
  Bio: BioScreen,
  UploadPhoto: UploadPhotoScreen,
  WeNeedToGetToKnowYou: WeNeedToGetToKnowYouScreen,
  Slide: SlideEntryScreen
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

const LanguageSelectionStack = createStackNavigator({
  LanguageSelectionScreen: LanguageSelectionScreen,
})

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
  LanguageSelectionStack,
  MentorProfileStack,
  HomeStack,
  LinksStack,
  SettingsStack,
  ButtonStack,
});
