import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {FontSize, Text} from '../../../components/Text';

const {width} = Dimensions.get('window');

interface OnboardingDescriptionViewProps {
  data: Array<T>;
  scrollOffset: SharedValue<number>;
  itemWidth: number;
  itemSeparatorWidth: number;
}

export const OnboardingDetailView = ({
  data,
  scrollOffset,
  itemWidth,
  itemSeparatorWidth,
}: OnboardingDescriptionViewProps) => {
  const cellWidth = itemWidth + itemSeparatorWidth;

  return (
    <Animated.View style={[{flexDirection: 'row'}]}>
      {data.map(({title, description}, index) => (
        <Detail
          title={title}
          description={description}
          index={index}
          scrollOffset={scrollOffset}
          cellWidth={cellWidth}
        />
      ))}
    </Animated.View>
  );
};

interface DetailProps {
  index: number;
  scrollOffset: SharedValue<number>;
  cellWidth: number;
  title: string;
  description: string;
}

const Detail = ({
  index,
  scrollOffset,
  cellWidth,
  title,
  description,
}: DetailProps) => {
  const inputRange = [
    (index - 1) * cellWidth,
    index * cellWidth,
    (index + 1) * cellWidth,
  ];

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          translateX: scrollOffset.value * -1,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width,
        },
        animatedStyles,
      ]}>
      <Animated.View key={`dot-${index}`} style={styles.subContainer}>
        <Text fontSize={FontSize.TitleOne}>{title}</Text>
        <Text style={styles.description} fontSize={FontSize.Body}>
          {description}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: width - 150,
    marginTop: 24,
  },
  subContainer: {
    marginTop: 24,
    marginBottom: 24,
    width: '70%',
  },
  description: {
    marginTop: 24,
  },
});
