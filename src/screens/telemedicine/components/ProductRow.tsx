import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
const {width} = Dimensions.get('screen');

const cellWidth = (width - 16) * 0.4;

export const ProductRow = () => {
  return (
    <View style={styles.root}>
      <FastImage
        style={styles.image}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View>
        <Text numberOfLines={1} fontSize={FontSize.Headline}>
          {'Bottle of Medice'}
        </Text>
        <Text style={styles.priceText} fontSize={FontSize.CaptionTwo}>
          {'Rs. 3500 '}
        </Text>
      </View>
      <Pressable style={styles.chatButton}>
        <Text style={styles.chatText}>Buy</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 8,
    width: cellWidth,
    backgroundColor: Colors.Secondary.LightWhite,
    marginRight: 16,
    borderRadius: 8,
  },
  image: {
    width: cellWidth - 8,
    height: cellWidth * 1.1,
    marginRight: 16,
    borderRadius: 8,
  },
  specializationText: {
    color: Colors.Primary.Grey,
    marginTop: -4,
  },
  priceText: {
    fontFamily: Font.Black,
    color: Colors.Primary.Orange,
  },
  chatButton: {
    paddingHorizontal: 16,
    backgroundColor: Colors.Primary.Purple,
    borderRadius: 4,
    marginRight: 8,
    marginTop: 4,
  },
  chatText: {
    fontFamily: Font.Regular,
    color: Colors.Primary.White,
    fontSize: 12,
    textAlign: 'center',
  },
});
