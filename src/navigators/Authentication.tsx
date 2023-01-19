import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {AboutYouScreen} from '../screens/authentication/AboutYouScreen';
import {OnboardingProvider} from '../context/Onboarding';
import {LastPeriodScreen} from '../screens/authentication/LastPeriodScreen';
import {PeriodLengthScreen} from '../screens/authentication/PeriodLengthScreen';
import {CycleScreen} from '../screens/authentication/CycleScreen';

export type AuthenticationStackParamList = {
  Onboarding: undefined;
  AboutYou: undefined;
  LastPeriod: undefined;
  PeriodLength: undefined;
  Cycle: undefined;
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

      <AuthenticationStack.Screen
        name="PeriodLength"
        component={PeriodLengthScreen}
      />

      <AuthenticationStack.Screen name="Cycle" component={CycleScreen} />
    </AuthenticationStack.Navigator>
  </OnboardingProvider>
);
