import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const ArrowRightIcon = ({
  size = 24,
  color = Colors.Primary.Black,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 11 21" {...rest}>
    <Path
      d="M1.72.408A1.435 1.435 0 0 1 2.84.94L9.77 9.55a1.435 1.435 0 0 1 0 1.822l-7.175 8.611a1.437 1.437 0 0 1-2.21-1.837L6.8 10.454.6 2.762A1.435 1.435 0 0 1 1.72.408Z"
      fill={color}
    />
  </Svg>
);
