import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ChartScreen} from '../screens/chart/ChartScreen';

export type CalendarStackParamList = {
  Chart: undefined;
};

const CalendarStack = createStackNavigator<CalendarStackParamList>();

export const CalendarNavigator = () => (
  // <UserProvider>
  //   <VehicleProvider>
  //     <FillingStationProvider>
  <CalendarStack.Navigator screenOptions={{headerShown: false}}>
    <CalendarStack.Screen name="Chart" component={ChartScreen} />
  </CalendarStack.Navigator>
  //     </FillingStationProvider>
  //   </VehicleProvider>
  // </UserProvider>
);
