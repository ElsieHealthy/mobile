import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TelemedicineScreen} from '../screens/telemedicine/TelemedicineScreen';
import {DoctorDetailScreen} from '../screens/doctor/DoctorDetailScreen';
import {DoctorsProvider} from '../context/Doctors';
import {ProductsProvider} from '../context/Products';

export type ConsultationStackParamList = {
  Telemedicine: undefined;
  DoctorDetail: {
    id: string;
  };
};

const ConsultationStack = createStackNavigator<ConsultationStackParamList>();

export const ConsultationNavigator = () => (
  <DoctorsProvider>
    <ProductsProvider>
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
    </ProductsProvider>
  </DoctorsProvider>
);
