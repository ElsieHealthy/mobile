import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';
import {ConsultationStackParamList} from '../../navigators/Consultation';

type NavigationProps = StackNavigationProp<
  ConsultationStackParamList,
  'DoctorDetail'
>;
type RouteProps = RouteProp<ConsultationStackParamList, 'DoctorDetail'>;
type DoctorDetailScreenProps = {
  route: RouteProps;
  navigation: NavigationProps;
};
export const DoctorDetailScreen = ({
  route,
  navigation,
}: DoctorDetailScreenProps) => {
  const {goBack} = navigation;
  const {
    params: {id},
  } = route;
  console.log('id', id);

  return (
    <View style={styles.root}>
      <Header
        title={'Profile Doctor'}
        leftIcon={<ArrowLeftIcon />}
        onPressLeft={goBack}
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
