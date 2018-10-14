import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
Label
} from 'native-base';
import WhereDoYouLiveScreen from '../screens/WhereDoYouLiveScreen';
import WhatBringsYouHereScreen from '../screens/WhatBringsYouHereScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import NumberOfChildrenScreen from '../screens/NumberOfChildrenScreen';
import BioScreen from '../screens/BioScreen';
import OpeningScreen from '../screens/OpeningScreen';
import ProfileScreen from '../screens/ProfileScreen'
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

const ProfileStack = createStackNavigator({
  Button: ProfileScreen,
})

ProfileStack.navigationOptions = {
  tabBarLabel: <Label style={{color:'#202227'}}>Profile</Label>,
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
}

const OpeningStack = createStackNavigator({
  Opening: OpeningScreen,
})

const HomeStack = createStackNavigator({
  LanguageSelection: LanguageSelectionScreen,
  Main: MainScreen,
  Mentor: MentorScreen,
  MentorProfile: MentorProfileScreen,
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
  tabBarLabel: <Label style={{color:'#202227'}}>Main Menu</Label>,
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
  tabBarLabel: <Label style={{color:'#202227'}}>My Peers</Label>,
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
  tabBarLabel: () => (<Label style={{color:'#202226'}}>Map</Label>) ,
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
  OpeningStack,
  HomeStack,
  ProfileStack,
  MentorProfileStack,
  LanguageSelectionStack,
},{tabBarOptions: {style: {    backgroundColor: '#E82446'
}}});

