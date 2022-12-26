import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {Colors} from '../../../Colors';

const {width, height} = Dimensions.get('window');

interface OnboardingBackgroundViewProps {
  image: ImageSourcePropType;
  color: string;
}

export const OnboardingBackgroundView = ({
  image,
  color,
}: OnboardingBackgroundViewProps) => {
  return (
    <View style={[styles.root, {backgroundColor: color}]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode={'contain'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.Secondary.LightGreen,
    width,
  },
  imageContainer: {
    width: width * 0.8,
    height: height * 0.45,
    marginTop: height * 0.05,
    marginBottom: height * 0.45,
  },
  image: {
    flex: 1,
  },
});
