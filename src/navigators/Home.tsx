import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ArticlesScreen} from '../screens/articles/ArticlesScreen';
import {ArticleScreen} from '../screens/article/ArticleScreen';

import {ArticlesProvider} from '../context/Articles';

export type HomeStackParamList = {
  Home: undefined;
  ArticleList: undefined;
  ArticleDetail: {
    id: string;
  };
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => (
  <ArticlesProvider>
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ArticleList" component={ArticlesScreen} />
      <HomeStack.Screen name="ArticleDetail" component={ArticleScreen} />
    </HomeStack.Navigator>
  </ArticlesProvider>
);
