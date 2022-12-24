import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

import {Colors} from '../Colors';
import {Font} from '../Fonts';

export enum FontSize {
  LargeTile,
  TitleOne,
  TitleTwo,
  TitleThree,
  Headline,
  Body,
  CaptionOne,
  CaptionTwo,
  CaptionTwoLight,
  CaptionThree,
}

interface TextProps extends RNTextProps {
  children: any;
  center?: boolean;
  small?: boolean;
  wrap?: boolean;
  muted?: boolean;
  fontSize?: FontSize;
  formatted?: boolean;
}

export const Text = ({
  children,
  fontSize = FontSize.Body,
  center = false,
  small = false,
  wrap = false,
  muted = false,
  formatted = false,
  style,
  ...rest
}: TextProps) => {
  if (children == null || children === '') {
    return null;
  }

  const getFontSize = () => {
    switch (fontSize) {
      case FontSize.LargeTile:
        return textStyles.largeTitle;
      case FontSize.TitleOne:
        return textStyles.titleOne;
      case FontSize.TitleTwo:
        return textStyles.titleTwo;
      case FontSize.TitleThree:
        return textStyles.titleThree;
      case FontSize.Headline:
        return textStyles.headline;
      case FontSize.Body:
        return textStyles.body;
      case FontSize.CaptionOne:
        return textStyles.captionOne;
      case FontSize.CaptionTwo:
        return textStyles.captionTwo;
      case FontSize.CaptionTwoLight:
        return textStyles.captionTwoLight;
      case FontSize.CaptionThree:
        return textStyles.captionThree;
    }
  };

  const renderChildren = () => {
    if (!formatted) {
      return children;
    }
    if (typeof children === 'number') {
      return `Rs. ${children.toLocaleString('en')}`;
    } else {
      return children;
    }
  };

  return (
    <RNText
      style={[
        small && textStyles.small,
        center && textStyles.textCenter,
        muted && textStyles.muted,
        wrap && textStyles.textWrap,
        {...getFontSize()},
        style,
      ]}
      {...rest}>
      {renderChildren()}
    </RNText>
  );
};

export const textStyles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },

  textWrap: {
    flex: 1,
    flexWrap: 'wrap',
  },

  small: {
    fontSize: 14,
    lineHeight: 18,
  },

  muted: {
    color: Colors.Label.OffGreen,
  },
  largeTitle: {
    fontSize: 32,
    fontFamily: Font.ExtraBold,
    lineHeight: 40,
  },
  titleOne: {
    fontSize: 30,
    fontFamily: Font.Bold,
    lineHeight: 38,
  },
  titleTwo: {
    fontSize: 26,
    fontFamily: Font.SemiBold,
    lineHeight: 34,
  },
  titleThree: {
    fontSize: 18,
    fontFamily: Font.Regular,
    lineHeight: 26,
  },
  headline: {
    fontSize: 15,
    fontFamily: Font.Bold,
    lineHeight: 23,
  },
  body: {
    fontSize: 15,
    fontFamily: Font.Regular,
    lineHeight: 23,
  },
  captionOne: {
    fontSize: 14,
    fontFamily: Font.Bold,
    lineHeight: 22,
  },
  captionTwo: {
    fontSize: 13,
    fontFamily: Font.Regular,
    lineHeight: 16,
  },
  captionTwoLight: {
    fontSize: 12,
    fontFamily: Font.Regular,
    lineHeight: 16,
  },
  captionThree: {
    fontSize: 12,
    fontFamily: Font.Bold,
    lineHeight: 16,
  },
});
