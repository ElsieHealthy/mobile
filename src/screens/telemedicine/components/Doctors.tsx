import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ConsultationStackParamList} from '../../../navigators/Consultation';
import {DoctorsRow} from './DoctorsRow';
import {ListHeader} from './ListHeader';

type NavigationProps = StackNavigationProp<
  ConsultationStackParamList,
  'Telemedicine'
>;


export const Doctors = () => {
  const [seeAll, setSeeAll] = useState(false);
  const {navigate} = useNavigation<NavigationProps>();

  const renderItems = ({item}) => {
    return (
      <DoctorsRow
        onPress={() => {
          navigate('DoctorDetail', {
            id: '',
          });
        }}
      />
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderHeader = () => {
    return (
      <ListHeader
        title={'Recommended Doctors'}
        subTitle={'Consult online with our available doctor'}
        onPressSeeAll={() => {
          setSeeAll(!seeAll);
        }}
      />
    );
  };

  return (
    <FlatList
      data={[
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]}
      scrollEnabled={seeAll}
      renderItem={renderItems}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={renderHeader}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  separator: {
    height: 24,
  },
});
