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
import ProfileScreen from '../screens/ProfileScreen'
import SlideEntryScreen from '../screens/SliderEntry'

const ProfileStack = createStackNavigator({
  Button: ProfileScreen,
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact${focused ? '' : '-outline'}`
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
  tabBarLabel: 'Main Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-menu${focused ? '' : '-outline'}`
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

MentorProfileStack .navigationOptions = {
  tabBarLabel: 'My Peers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-people${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LanguageSelectionStack = createStackNavigator({
  LanguageSelectionScreen: LanguageSelectionScreen,
})

LanguageSelectionStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pin${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  MentorProfileStack,
  LanguageSelectionStack,
});
