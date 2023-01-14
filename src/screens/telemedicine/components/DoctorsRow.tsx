import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
const {width} = Dimensions.get('screen');

interface DoctorsRowProps {
  onPress: () => void;
}

export const DoctorsRow = ({onPress}: DoctorsRowProps) => {
  return (
    <Pressable onPress={onPress} containerStyle={styles.root}>
      <View style={styles.subContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View>
          <Text fontSize={FontSize.Headline}>{'Dr. Ronald Richards'}</Text>
          <Text
            style={styles.specializationText}
            fontSize={FontSize.CaptionTwo}>
            {'General  Practitioner'}
          </Text>
          <Text style={styles.priceText} fontSize={FontSize.CaptionTwo}>
            {'Rs. 2500 '}
          </Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Pressable style={styles.chatButton}>
          <Text style={styles.chatText}>Chat</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: width * 0.15,
    borderRadius: width * 0.07,
    aspectRatio: 1 / 1,
    marginRight: 16,
  },
  specializationText: {
    color: Colors.Primary.Grey,
    marginTop: -4,
  },
  priceText: {
    color: Colors.Primary.Purple,
  },
  chatButton: {
    paddingHorizontal: 16,
    backgroundColor: Colors.Primary.Purple,
    borderRadius: 4,
    marginRight: 8,
  },
  chatText: {
    fontFamily: Font.Regular,
    color: Colors.Primary.White,
    fontSize: 12,
  },
});
