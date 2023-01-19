import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Colors} from '../../Colors';
import {FontSize, Text} from '../../components/Text';
import {Wave} from '../../icons/Wave';
import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {InputCalendar} from './components/InputCalendar';
import {Block} from '../../components/Button/Block';
import {useOnboarding} from '../../context/Onboarding';
import {Pressable} from '../../components/Button/Pressable';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';

type NavigationProps = StackNavigationProp<
  AuthenticationStackParamList,
  'LastPeriod'
>;


export const LastPeriodScreen = () => {
  const {navigate, goBack} = useNavigation<NavigationProps>();
  const {top, bottom} = useSafeAreaInsets();
  const {lastPeriodDate, setLastPeriodDate} = useOnboarding();

  return (
    <View style={styles.root}>
      <>
        <View style={[{paddingTop: 44 + top}, styles.header]}>
          <Text
            style={{color: Colors.Primary.White}}
            fontSize={FontSize.LargeTile}>
            When did you last period start?
          </Text>
        </View>
        <Wave inline />
      </>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <InputCalendar
          selectedDate={lastPeriodDate}
          onChangeDate={setLastPeriodDate}
        />
      </ScrollView>

      <View style={[styles.buttonContainer, {paddingBottom: 16 + bottom}]}>
        <Pressable onPress={goBack} style={styles.backButtonContainer}>
          <ArrowLeftIcon size={16} color={Colors.Primary.White} />
        </Pressable>
        <Block
          onPress={() => {
            navigate('PeriodLength');
          }}>
          Next
        </Block>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    backgroundColor: Colors.Primary.Purple,
    padding: 16,
  },
  backButtonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: Colors.Primary.Purple,
    marginRight: 8,
  },

  buttonContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
  },
});
