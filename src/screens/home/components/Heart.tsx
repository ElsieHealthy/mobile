import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../Colors';
import {Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {SafeVector} from '../../../icons/heart';

const {height} = Dimensions.get('screen');

export const Heart = () => {
  return (
    <View style={styles.root}>
      <View>
        <SafeVector size={height * 0.35} />
        <View style={[StyleSheet.absoluteFill, styles.textContainer]}>
          <Text style={styles.topText}>Prediction</Text>
          <Text style={styles.middleText}>Safe Period</Text>
          <Text style={styles.bottomText}>Your safe on this periode</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: Colors.Primary.White,
    fontFamily: Font.Bold,
    fontSize: 22,
    lineHeight: 28,
  },
  middleText: {
    color: Colors.Primary.White,
    fontFamily: Font.Black,
    fontSize: 42,
    lineHeight: 48,
  },
  bottomText: {
    color: Colors.Secondary.LightYellow,
    fontFamily: Font.Bold,
    fontSize: 14,
    width: '50%',
    textAlign: 'center',
  },
});
