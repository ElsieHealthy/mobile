import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';

export type ProfileStackParamList = {
  Home: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => (
  // <UserProvider>
  //   <VehicleProvider>
  //     <FillingStationProvider>
  <ProfileStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileStack.Screen name="Home" component={HomeScreen} />
  </ProfileStack.Navigator>
  //     </FillingStationProvider>
  //   </VehicleProvider>
  // </UserProvider>
);
