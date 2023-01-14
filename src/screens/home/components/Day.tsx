import React from 'react';
import {View, StyleSheet, Platform, Dimensions} from 'react-native';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {Styles} from '../../../Styles';

const {width} = Dimensions.get('screen');
const cellWidth = (width - 40) * 0.12;

interface WeekProp {
  day: number;
  noOfEvents: number;
  isCurrent: boolean;
  moment: 'past' | 'present' | 'future';
  onPress: (week: number) => void;
}

export const Day = ({
  day,
  noOfEvents,
  isCurrent,
  moment = 'past',
  onPress,
}: WeekProp) => {
  return (
    <Pressable style={styles.rootContainer} onPress={() => onPress(day)}>
      <View style={[styles.container, styles[`${moment}Container`]]}>
        <Text
          fontSize={FontSize.CaptionThree}
          style={[styles[`${moment}Text`]]}>
          {day}
        </Text>
      </View>
      <Text fontSize={FontSize.CaptionTwo} style={styles.dayText}>
        {day}
      </Text>
      {!!noOfEvents && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{noOfEvents}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 4,
  },

  container: {
    width: cellWidth,
    aspectRatio: 1 / 1,
    borderRadius: cellWidth * 0.5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pastContainer: {
    backgroundColor: Colors.Secondary.LightRose,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.Primary.Rose,
  },
  presentContainer: {
    backgroundColor: Colors.Primary.Rose,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.Secondary.LightRose,
  },
  futureContainer: {
    backgroundColor: Colors.Primary.White,
    borderWidth: 0,
  },

  pastText: {
    color: Colors.Primary.Rose,
  },
  presentText: {
    color: Colors.Primary.White,
  },
  futureText: {
    color: Colors.Primary.Black,
  },
  dayText: {
    alignSelf: 'center',
    paddingTop: 4,
  },
  badge: {
    position: 'absolute',
    top: -5,
    left: -5,
    backgroundColor: Colors.Primary.Red,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontFamily: Font.Regular,
    fontSize: 10,
    color: Colors.Primary.White,
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
