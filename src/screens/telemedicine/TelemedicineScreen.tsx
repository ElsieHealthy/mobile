import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {Doctors} from './components/Doctors';
import {Products} from './components/Products';


export const TelemedicineScreen = () => {
  return (
    <View style={styles.root}>
      <Header title={'Telemedicine'} />
      <View style={styles.subRoot}>
        <View style={styles.topContainer}>
          <Doctors />
        </View>
        <View style={styles.bottomContainer}>
          <Products />
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  subRoot: {
    flex: 1,
  },
  topContainer: {
    flex: 0.48,
  },
  bottomContainer: {
    flex: 0.4,
  },
});
