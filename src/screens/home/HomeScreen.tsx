import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Colors';
import {Pressable} from '../../components/Button/Pressable';
import {FontSize, Text} from '../../components/Text';
import {Articles} from './components/Articles';
import {Moods} from './components/Moods';

export const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={{flex: 0.5}}></View>
      <View
        style={{
          flex: 0.5,
          borderTopStartRadius: 30,
          backgroundColor: Colors.Primary.White,
          padding: 20,
        }}>
        <Moods />
        <Articles />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Secondary.LightRose,
  },
});
