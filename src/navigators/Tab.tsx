import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from './Home';
import {CalendarNavigator} from './Calendar';
import {ConsultationNavigator} from './Consultation';
import {ProfileNavigator} from './Profile';
import {TabBar} from '../components/TabBar';

export type TabNavigatorParamList = {
  Home: undefined;
  Calendar: undefined;
  Consultation: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name={'Calendar'}
        component={CalendarNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Calendar',
        }}
      />
      <Tab.Screen
        name={'Consultation'}
        component={ConsultationNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Consultation',
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
