import React, {FC, PropsWithChildren, useImperativeHandle, useRef} from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import RNTooltip from 'rn-tooltip';
import {Colors} from '../Colors';
import {Font} from '../Fonts';
import {Block} from './Button/Block';
import {Text} from './Text';

export interface TooltipProps {
  text: string;
  popover?: React.ReactElement<{}>;
  withPointer?: boolean;
  height?: number | string;
  width?: number | string;
  containerStyle?: StyleProp<ViewStyle>;
  pointerColor?: string;
  pointerStyle?: StyleProp<ViewStyle>;
  onClose?: () => void;
  onOpen?: () => void;
  withOverlay?: boolean;
  overlayColor?: string;
  backgroundColor?: string;
  highlightColor?: string;
  toggleWrapperProps?: TouchableOpacityProps;
  actionType?: 'press' | 'longPress' | 'none';
  toggleTooltip?: () => void;
}

export interface TooltipHandle {
  toggleTooltip: () => void;
  isVisible: boolean;
}

const toolTipWidth = Dimensions.get('screen').width * 0.85;

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = React.forwardRef(
  (
    {
      children,
      text,
      backgroundColor = Colors.Secondary.LightBrown,
      width = toolTipWidth,
      height = 'auto',
      withOverlay = false,
      actionType = 'press',
      overlayColor = Colors.Secondary.LightYellow,
      ...rest
    },
    ref: React.Ref<TooltipHandle>,
  ) => {
    const refToolTip = useRef<RNTooltip>(null);
    const closeToolTip = () => {
      return refToolTip.current?.toggleTooltip();
    };

    useImperativeHandle(ref, () => ({
      toggleTooltip: () => {
        if (refToolTip.current?.state?.isVisible) {
          return;
        }
        refToolTip.current?.toggleTooltip();
      },
      isVisible: refToolTip.current?.state?.isVisible,
    }));

    return (
      <RNTooltip
        ref={refToolTip}
        height={height}
        width={width}
        withOverlay={withOverlay}
        containerStyle={styles.container}
        backgroundColor={backgroundColor}
        overlayColor={overlayColor}
        actionType={actionType}
        popover={
          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
        }
        {...rest}>
        {children}
      </RNTooltip>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: Font.Regular,
    lineHeight: 22,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    margin: 0,
    padding: 12,
  },
});
