import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Colors} from '../Colors';

export interface PaginationDotsProps {
  data: Array<Object>;
  scrollOffset: SharedValue<number>;
  containerStyle?: ViewStyle;
  itemWidth: number;
  itemSeparatorWidth: number;
}

export const PaginationDots = ({
  scrollOffset,
  data,
  containerStyle,
  itemWidth,
  itemSeparatorWidth,
}: PaginationDotsProps) => {
  if (data.length <= 1) {
    return <></>;
  }

  const width = itemWidth + itemSeparatorWidth;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {data.map((_, index) => (
        <Dot index={index} scrollOffset={scrollOffset} cellWidth={width} />
      ))}
    </View>
  );
};

interface DotProps {
  index: number;
  scrollOffset: SharedValue<number>;
  cellWidth: number;
}

const Dot = ({index, scrollOffset, cellWidth}: DotProps) => {
  const inputRange = [
    (index - 1) * cellWidth,
    index * cellWidth,
    (index + 1) * cellWidth,
  ];

  const animatedStyles = useAnimatedStyle(() => {
    const width = interpolate(
      scrollOffset.value,
      inputRange,
      [7, 34, 7],
      Extrapolation.CLAMP,
    );

    const backgroundColor = interpolateColor(scrollOffset.value, inputRange, [
      Colors.Secondary.LightGrey,
      Colors.Secondary.LightBlue,
      Colors.Secondary.LightGrey,
    ]);

    return {
      width,
      backgroundColor,
    };
  });

  return (
    <Animated.View
      key={`dot-${index}`}
      style={[styles.dotStyle, animatedStyles]}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginHorizontal: 2,
  },
});
