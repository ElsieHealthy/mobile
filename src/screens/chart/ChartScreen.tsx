import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {Calendar} from './components/Calendar';
import {Charts} from './components/Charts';

export const ChartScreen = () => {
  return (
    <View style={styles.root}>
      <Header title={'Chart and Calendar'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Charts />
        <Calendar />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
});
