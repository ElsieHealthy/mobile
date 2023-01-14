import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TelemedicineScreen} from '../screens/telemedicine/TelemedicineScreen';
import {DoctorDetailScreen} from '../screens/doctor/DoctorDetailScreen';

export type ConsultationStackParamList = {
  Telemedicine: undefined;
  DoctorDetail: {
    id: string;
  };
};

const ConsultationStack = createStackNavigator<ConsultationStackParamList>();

export const ConsultationNavigator = () => (
  // <UserProvider>
  //   <VehicleProvider>
  //     <FillingStationProvider>
  <ConsultationStack.Navigator screenOptions={{headerShown: false}}>
    <ConsultationStack.Screen
      name="Telemedicine"
      component={TelemedicineScreen}
    />
    <ConsultationStack.Screen
      name="DoctorDetail"
      component={DoctorDetailScreen}
    />
  </ConsultationStack.Navigator>
  //     </FillingStationProvider>
  //   </VehicleProvider>
  // </UserProvider>
);
