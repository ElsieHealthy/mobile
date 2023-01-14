import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const BellIcon = ({
  size = 24,
  color = Colors.Primary.Purple,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 26 28" {...rest}>
    <Path
      d="m25.244 22.79-.282-.248a11.93 11.93 0 0 1-2.084-2.433 10.484 10.484 0 0 1-1.12-3.993v-4.1A8.974 8.974 0 0 0 13.92 3.09v-1.07a1.108 1.108 0 1 0-2.216 0v1.087a8.974 8.974 0 0 0-7.746 8.907v4.101a10.485 10.485 0 0 1-1.12 3.994 11.955 11.955 0 0 1-2.05 2.432l-.283.249v2.341h24.739v-2.341Z"
      fill={color}
    />
    <Path d="M10.691 26.004a2.2 2.2 0 0 0 4.358 0h-4.358Z" fill={color} />
  </Svg>
);
