import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from './Home';
import {CalendarNavigator} from './Calendar';
import {ConsultationNavigator} from './Consultation';
import {ProfileNavigator} from './Profile';
import {TabBar} from '../components/TabBar';

export type TabNavigatorParamList = {
  HomeStack: undefined;
  CalendarStack: undefined;
  ConsultationStack: undefined;
  ProfileStack: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name={'CalendarStack'}
        component={CalendarNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Calendar',
        }}
      />
      <Tab.Screen
        name={'ConsultationStack'}
        component={ConsultationNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Consultation',
        }}
      />
      <Tab.Screen
        name={'ProfileStack'}
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
