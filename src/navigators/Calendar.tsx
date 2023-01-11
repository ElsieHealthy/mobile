import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';

export type CalendarStackParamList = {
  Home: undefined;
};

const CalendarStack = createStackNavigator<CalendarStackParamList>();

export const CalendarNavigator = () => (
  // <UserProvider>
  //   <VehicleProvider>
  //     <FillingStationProvider>
  <CalendarStack.Navigator screenOptions={{headerShown: false}}>
    <CalendarStack.Screen name="Home" component={HomeScreen} />
  </CalendarStack.Navigator>
  //     </FillingStationProvider>
  //   </VehicleProvider>
  // </UserProvider>
);
