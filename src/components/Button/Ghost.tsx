import React, {FC, PropsWithChildren} from 'react';
import {View, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text, textStyles} from '../Text';
import {Pressable, PressableProps} from './Pressable';
import {ComponentStyles} from '../Styles';

interface GhostProps extends PressableProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Ghost: FC<PropsWithChildren<GhostProps>> = ({
  iconLeft,
  iconRight,
  textStyle = ComponentStyles.ghostButtonText,
  buttonStyle,
  children,
  disabled,
  ...rest
}) => (
  <Pressable
    style={[ComponentStyles.buttonRoot, {opacity: disabled ? 0.3 : 1}]}
    {...rest}>
    <View style={[ComponentStyles.ghostButton, buttonStyle]}>
      {iconLeft}
      {typeof children === 'string' ? (
        <Text
          style={[
            iconLeft != null && ComponentStyles.buttonIconLeft,
            iconRight != null && ComponentStyles.buttonIconLeft,
            textStyles.headline,
            textStyle,
          ]}>
          {children}
        </Text>
      ) : (
        children
      )}
      {iconRight}
    </View>
  </Pressable>
);
