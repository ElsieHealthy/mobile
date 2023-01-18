import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {AboutYouScreen} from '../screens/authentication/AboutYouScreen';
import {OnboardingProvider} from '../context/Onboarding';
import {LastPeriodScreen} from '../screens/authentication/LastPeriodScreen';

export type AuthenticationStackParamList = {
  Onboarding: undefined;
  AboutYou: undefined;
  LastPeriod: undefined;
};

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

export const AuthenticationNavigator = () => (
  <OnboardingProvider>
    <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
      <AuthenticationStack.Screen name="AboutYou" component={AboutYouScreen} />
      <AuthenticationStack.Screen
        name="LastPeriod"
        component={LastPeriodScreen}
      />

      {/* <AuthenticationStack.Screen
        name="AboutYouScreen"
        component={AboutYouScreen}
      />
      <AuthenticationStack.Screen
        name="AboutYouScreen"
        component={AboutYouScreen}
      />
      <AuthenticationStack.Screen
        name="AboutYouScreen"
        component={AboutYouScreen}
      />
      <AuthenticationStack.Screen
        name="AboutYouScreen"
        component={AboutYouScreen}
      />
      <AuthenticationStack.Screen
        name="AboutYouScreen"
        component={AboutYouScreen}
      /> */}
    </AuthenticationStack.Navigator>
  </OnboardingProvider>
);
