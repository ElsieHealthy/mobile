import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, View, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Colors} from '../../Colors';
import {FontSize, Text} from '../../components/Text';
import {Wave} from '../../icons/Wave';
import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {TextInput} from '../../components/TextInput';
import {DatePickerBottomSheet} from '../../components/DatePickerBottomSheet';
import {Block} from '../../components/Button/Block';
import {useOnboarding} from '../../context/Onboarding';

type NavigationProps = StackNavigationProp<
  AuthenticationStackParamList,
  'AboutYou'
>;

const isAndroid = Platform.OS === 'android';

export const AboutYouScreen = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {top, bottom} = useSafeAreaInsets();
  const {name, setName, dateOfBirth, setDateOfBirth} = useOnboarding();

  return (
    <View style={styles.root}>
      <>
        <View style={[{paddingTop: 44 + top}, styles.header]}>
          <Text
            style={{color: Colors.Primary.White}}
            fontSize={FontSize.LargeTile}>
            Welcome to your trusted Health Assistance
          </Text>
        </View>
        <Wave inline />
      </>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
        }}>
        <Text
          style={{color: Colors.Primary.DarkBlue, paddingVertical: 24}}
          fontSize={FontSize.CaptionOne}>
          We would like to know how to address you and need to few details to
          being know you
        </Text>

        <TextInput
          label={'Name'}
          autoCapitalize={'words'}
          textContentType={'name'}
          placeholder={'Fiona'}
          value={name}
          onChangeText={setName}
        />
        <DatePickerBottomSheet
          label="Date Of Birth"
          defaultDate={isAndroid ? new Date(1994, 1, 1) : new Date(1994, 0, 1)}
          date={dateOfBirth}
          onConfirm={setDateOfBirth}
          placeholderText={'Date of birth'}
        />
      </ScrollView>
      <View style={[styles.buttonContainer, {paddingBottom: 16 + bottom}]}>
        <Block
          onPress={() => {
            navigate('LastPeriod');
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
  header: {
    backgroundColor: Colors.Primary.Purple,
    padding: 16,
  },

  buttonContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
  },
});
