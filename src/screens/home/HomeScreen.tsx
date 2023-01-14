import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../Colors';
import {Articles} from './components/Articles';
import {Header} from './components/Header';
import {Heart} from './components/Heart';
import {Moods} from './components/Moods';
import {Timeline} from './components/Timeline';

export const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Heart />
          <Timeline
            numberOfEvents={31}
            current={14}
            selected={14}
            onSelect={() => {}}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Moods />
          <Articles />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Label.OffRed,
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: Colors.Label.OffRed,
  },
  bottomContainer: {
    flex: 0.5,
    borderTopStartRadius: 30,
    backgroundColor: Colors.Primary.White,
    padding: 20,
  },
});
