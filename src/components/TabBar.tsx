import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../Colors';
import {HomeIcon} from '../icons/Home';
import {CalendarIcon} from '../icons/Calendar';
import {StethoscopeIcon} from '../icons/Stethoscope';
import {ProfileIcon} from '../icons/Profile';

export const TabBar = (props: BottomTabBarProps) => {
  const {state, descriptors, navigation} = props;

  const showTabBar = true;

  const getIcon = (label: string, selected: boolean) => {
    const selectedColor = selected ? Colors.Primary.White : Colors.Primary.Grey;
    switch (label) {
      case 'Home':
        return <HomeIcon size={24} color={selectedColor} />;
      case 'Calendar':
        return <CalendarIcon size={24} color={selectedColor} />;
      case 'Consultation':
        return <StethoscopeIcon size={24} color={selectedColor} />;
      case 'Profile':
        return <ProfileIcon size={24} color={selectedColor} />;
    }
  };

  return (
    <>
      {showTabBar && (
        <View style={styles.container}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const {tabBarLabel} = options;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                style={styles.button}
                key={index}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => {
                  onPress();
                }}
                onLongPress={onLongPress}>
                <LinearGradient
                  colors={
                    isFocused
                      ? Colors.Gradients.Purple
                      : [Colors.Primary.White, Colors.Primary.White]
                  }
                  style={styles.iconWrapper}>
                  {getIcon(tabBarLabel ?? '', isFocused)}
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.Primary.White,
    paddingTop: 8,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    height: 80,
  },
  iconWrapper: {
    flexDirection: 'row',
    margin: 0,
    padding: 10,
    borderRadius: 28,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: -20,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: Colors.Secondary.LightGreen,
    fontSize: 10,
    marginTop: 4,
  },

  buttonTextFocused: {
    color: Colors.Primary.Rose,
  },
});
