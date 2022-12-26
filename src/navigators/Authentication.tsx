import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';

// import {SignIn} from '../screens/authentication/SignIn';
// import {Verification} from '../screens/authentication/Verification';
// import {AccountDetails} from '../screens/authentication/AccountDetails';
// import {VehicleDetails} from '../screens/authentication/VehicleDetails';
// import {OnboardingProvider} from '../context/Onboarding';

export type AuthenticationStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  Verification: {phoneNo: string};
  AccountDetails: undefined;
  VehicleDetails: undefined;
};

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

export const AuthenticationNavigator = () => (
  // <OnboardingProvider>
  <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
    <AuthenticationStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
    />
    {/*<AuthenticationStack.Screen name="Verification" component={Verification} />
    <AuthenticationStack.Screen
      name="AccountDetails"
      component={AccountDetails}
    />
    <AuthenticationStack.Screen
      name="VehicleDetails"
      component={VehicleDetails}
    /> */}
  </AuthenticationStack.Navigator>
  // </OnboardingProvider>
);
