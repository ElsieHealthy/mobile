import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

export type ProfileStackParamList = {
  Profile: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => (
  <ProfileStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
