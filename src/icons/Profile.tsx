import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const ProfileIcon = ({
  size = 24,
  color = Colors.Primary.Grey,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 28 27" {...rest}>
    <Path
      d="M14.315 5.8a4.77 4.77 0 1 0 0 9.54 4.77 4.77 0 0 0 0-9.54Zm0 7.631a2.861 2.861 0 1 1 0-5.722 2.861 2.861 0 0 1 0 5.723Z"
      fill={color}
    />
    <Path
      d="M13.831.076a13.355 13.355 0 1 0 13.356 13.356A13.37 13.37 0 0 0 13.83.076ZM8.108 23.331v-1.314a2.865 2.865 0 0 1 2.862-2.862h5.723a2.865 2.865 0 0 1 2.862 2.862v1.314a11.352 11.352 0 0 1-11.447 0Zm13.347-1.384a4.772 4.772 0 0 0-4.762-4.7H10.97a4.772 4.772 0 0 0-4.763 4.7 11.448 11.448 0 1 1 15.25 0h-.002Z"
      fill={color}
    />
  </Svg>
);
