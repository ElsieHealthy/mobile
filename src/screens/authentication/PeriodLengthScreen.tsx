import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Picker} from 'react-native-wheel-pick';

import {Colors} from '../../Colors';
import {FontSize, Text} from '../../components/Text';
import {Wave} from '../../icons/Wave';
import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {Block} from '../../components/Button/Block';
import {useOnboarding} from '../../context/Onboarding';
import {Pressable} from '../../components/Button/Pressable';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';

type NavigationProps = StackNavigationProp<
  AuthenticationStackParamList,
  'PeriodLength'
>;

export const PeriodLengthScreen = () => {
  const {navigate, goBack} = useNavigation<NavigationProps>();
  const {top, bottom} = useSafeAreaInsets();
  const {periodLength, setPeriodLength} = useOnboarding();

  return (
    <View style={styles.root}>
      <>
        <View style={[{paddingTop: 44 + top}, styles.header]}>
          <Text
            style={{color: Colors.Primary.White}}
            fontSize={FontSize.LargeTile}>
            How long does your period usually last?
          </Text>
        </View>
        <Wave inline />
      </>
      <View style={styles.scrollContainer}>
        <Picker
          selectedValue={periodLength}
          style={{backgroundColor: Colors.Primary.White}}
          pickerData={[...Array(10)].map((_, index) => ({
            value: index + 1,
            label: `${index + 1} Days`,
          }))}
          onValueChange={(value: string) => {
            setPeriodLength(value as unknown as number);
          }}
        />

        <Text
          center
          style={{color: Colors.Secondary.LightGrey}}
          fontSize={FontSize.Body}>
          Period Length is measured from the first to the last day of bleeding
        </Text>
      </View>

      <View style={[styles.buttonContainer, {paddingBottom: 16 + bottom}]}>
        <Pressable onPress={goBack} style={styles.backButtonContainer}>
          <ArrowLeftIcon size={16} color={Colors.Primary.White} />
        </Pressable>
        <Block
          onPress={() => {
            navigate('Cycle');
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
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
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
