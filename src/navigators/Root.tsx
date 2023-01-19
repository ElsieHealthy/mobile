import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from '../Colors';

import {NavigatorScreenParams} from '@react-navigation/native';
import {
  AuthenticationNavigator,
  AuthenticationStackParamList,
} from './Authentication';
import {useAuthentication} from '../context/Auth';
import {TabNavigator, TabNavigatorParamList} from './Tab';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthenticationStackParamList>;
  TabStack: NavigatorScreenParams<TabNavigatorParamList>;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const {isAuthenticated, loading} = useAuthentication();
  return (
    <RootStack.Navigator
      screenOptions={{
        presentation: 'card',
        headerShown: false,
        cardStyle: {backgroundColor: Colors.Primary.White},
        gestureEnabled: false,
      }}>
      {isAuthenticated ? (
        <RootStack.Screen name="TabStack" component={TabNavigator} />
      ) : (
        <RootStack.Screen
          name="AuthStack"
          component={AuthenticationNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};
