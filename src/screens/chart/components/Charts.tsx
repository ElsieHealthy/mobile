import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Colors} from '../../../Colors';
import {PregnantPrediction} from './PregnantPrediction';
import {Header} from './Header';

export const Charts = () => {
  return (
    <View style={[styles.scrollContainer]}>
      <Header
        title={'Pregnant Prediction'}
        onPressLeft={() => {}}
        onPressRight={() => {}}
      />
      <Animated.ScrollView
        horizontal
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <PregnantPrediction />
          <PregnantPrediction />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.Label.OffBlue,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 8,
  },
  container: {
    flexDirection: 'row',
  },
});
