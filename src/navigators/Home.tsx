import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ArticlesScreen} from '../screens/article/ArticlesScreen';
import {ArticlesProvider} from '../context/Articles';

export type HomeStackParamList = {
  Home: undefined;
  ArticleList: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => (
  <ArticlesProvider>
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ArticleList" component={ArticlesScreen} />
    </HomeStack.Navigator>
  </ArticlesProvider>
);
