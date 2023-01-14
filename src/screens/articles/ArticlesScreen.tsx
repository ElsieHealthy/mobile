import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';
import {HomeStackParamList} from '../../navigators/Home';
import {ArticleRow} from './components/ArticleRow';
import {Categories} from './components/Categories';

type NavigationProps = StackNavigationProp<HomeStackParamList, 'Home'>;

export const ArticlesScreen = () => {
  const {navigate, goBack} = useNavigation<NavigationProps>();

  return (
    <View style={styles.root}>
      <Header
        title={'Article'}
        leftIcon={<ArrowLeftIcon />}
        onPressLeft={goBack}
      />
      <Categories />
      <ArticleRow
        title={'Hot Article'}
        onPress={() => {
          navigate('ArticleDetail', {id: ''});
        }}
      />
      <ArticleRow
        title={'Recent'}
        onPress={() => {
          navigate('ArticleDetail', {id: ''});
        }}
      />
      <ArticleRow
        title={'Handpick'}
        onPress={() => {
          navigate('ArticleDetail', {id: ''});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  subTitle: {
    padding: 20,
    paddingVertical: 8,
  },
});
