import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {BellIcon} from '../../../icons/Bell';

export const Header = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: 24 + top,
        },
      ]}>
      <View>
        <Text style={styles.greetingText} fontSize={FontSize.CaptionOne}>
          Welcome
        </Text>
        <Text numberOfLines={1} style={styles.userText}>
          Fiona
        </Text>
      </View>
      <Pressable
        style={styles.notificationButton}
        containerStyle={styles.notificationButtonContainer}>
        <View>
          <BellIcon />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  greetingText: {
    color: Colors.Primary.Purple,
    lineHeight: 22,
    fontSize: 14,
  },
  userText: {
    fontFamily: Font.Bold,
    fontSize: 18,
  },
  notificationButton: {
    backgroundColor: Colors.Primary.White,
    aspectRatio: 1 / 1,
    borderRadius: 10,
  },
  notificationButtonContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
