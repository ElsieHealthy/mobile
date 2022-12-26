import React, {useRef, useState} from 'react';

import {
  View,
  Dimensions,
  StyleSheet,
  ViewabilityConfig,
  ViewabilityConfigCallbackPairs,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';
import {Colors} from '../../Colors';
import {Block} from '../../components/Button/Block';
import {Ghost} from '../../components/Button/Ghost';
import {PaginationDots} from '../../components/PaginationDots';
import {OnboardingBackgroundView} from './components/OnboardingBackgroundView';
import {OnboardingDetailView} from './components/OnboardingDetailView';

const {height, width} = Dimensions.get('window');

const onboardingViews = [
  {
    image: require('../../images/onboarding_one.png'),
    color: Colors.Secondary.LightGreen,
    title: 'Track your health activity with Elsie',
    description:
      'Elsie - your female health assistant help you to track all calendar period activity and give your suggestion',
  },
  {
    image: require('../../images/onboarding_two.png'),
    color: Colors.Secondary.LightBrown,
    title: 'Read our article to more experience',
    description:
      'Our article is complete for your casual activity, like cooking, fashion style, health and etc about woman',
  },
  {
    image: require('../../images/onboarding_three.png'),
    color: Colors.Secondary.LightRose,
    title: 'Consult with doctor about your health',
    description:
      'In this app, you can chat doctor and consultation about your health, and you too buy medicines in one apps',
  },
];

export const OnboardingScreen = () => {
  const scrollX = useSharedValue(0);
  const scroll = useAnimatedRef<Animated.ScrollView>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.root}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.ScrollView
          ref={scroll}
          scrollEventThrottle={16}
          pagingEnabled
          horizontal
          bounces={false}
          decelerationRate={'fast'}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          disableIntervalMomentum>
          {onboardingViews.map(({image, color}) => (
            <OnboardingBackgroundView image={image} color={color} />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.paginationContainer}>
          <PaginationDots
            data={onboardingViews}
            scrollOffset={scrollX}
            itemWidth={width}
            itemSeparatorWidth={0}
          />
        </View>
        <OnboardingDetailView
          itemWidth={width}
          itemSeparatorWidth={0}
          data={onboardingViews}
          scrollOffset={scrollX}
        />
        <View style={styles.buttonContainer}>
          <Block
            onPress={() => {
              if (scroll && scroll?.current) {
                scroll?.current.scrollTo({
                  x: width + scrollX.value,
                  y: 0,
                  animated: true,
                });
              }
            }}>
            Next
          </Block>
        </View>
        <View style={styles.buttonContainer}>
          <Ghost onPress={() => {}}>Skip</Ghost>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height,
    justifyContent: 'flex-end',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginLeft: -2,
  },
  detailContainer: {
    minHeight: height * 0.5,
    marginRight: 50,
    borderTopRightRadius: 63,
    overflow: 'hidden',
    backgroundColor: Colors.Primary.White,
    paddingTop: 72,
    paddingHorizontal: 50,
    paddingBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
