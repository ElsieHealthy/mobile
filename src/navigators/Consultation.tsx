import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';

export type ConsultationStackParamList = {
  Home: undefined;
};

const ConsultationStack = createStackNavigator<ConsultationStackParamList>();

export const ConsultationNavigator = () => (
  // <UserProvider>
  //   <VehicleProvider>
  //     <FillingStationProvider>
  <ConsultationStack.Navigator screenOptions={{headerShown: false}}>
    <ConsultationStack.Screen name="Home" component={HomeScreen} />
  </ConsultationStack.Navigator>
  //     </FillingStationProvider>
  //   </VehicleProvider>
  // </UserProvider>
);
