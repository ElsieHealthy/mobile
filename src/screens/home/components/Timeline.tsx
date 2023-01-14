import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {Day} from './Day';

interface TimelineProps {
  numberOfEvents: number;
  current: number | undefined;
  selected: number;
  onSelect: (event: number) => void;
  customTexts?: {[n: number]: string};
}

export const Timeline = ({
  numberOfEvents,
  current,
  selected,
  onSelect,
}: TimelineProps) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef<any>();
  const weekWidth = 40;
  const dashWidth = 32;

  const scrollToSelected = useCallback(() => {
    const halfScreenWidth = Dimensions.get('screen').width / 2;

    scrollViewRef.current?.scrollTo({
      x: (weekWidth + dashWidth) * selected - halfScreenWidth - 36,
      y: 0,
      animated: true,
    });
  }, [selected]);

  useEffect(() => scrollToSelected(), [scrollToSelected]);

  useEffect(() => {
    const unsubscribeNavigationFocus = navigation.addListener(
      'focus',
      scrollToSelected,
    );
    const unsubscribeNavigationBlur = navigation.addListener(
      'blur',
      scrollToSelected,
    );

    return () => {
      unsubscribeNavigationFocus();
      unsubscribeNavigationBlur();
    };
  }, [scrollToSelected, navigation]);

  const renderEvents = () => {
    var events: JSX.Element[] = [];
    for (let i = 1; i <= numberOfEvents; i++) {
      events.push(
        <Day
          key={i}
          isCurrent={current === i}
          day={i}
          moment={i === selected ? 'present' : i < selected ? 'past' : 'future'}
          onPress={onSelect}
          noOfEvents={0}
        />,
      );
    }
    return events;
  };

  return (
    <Animated.ScrollView
      horizontal
      bounces={false}
      ref={scrollViewRef}
      onLayout={scrollToSelected}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      style={[styles.scrollContainer]}>
      {renderEvents()}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    height: 'auto',
    marginHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 16,
  },
});
