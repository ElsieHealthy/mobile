import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const ArrowLeftIcon = ({
  size = 24,
  color = Colors.Primary.Black,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 11 21" {...rest}>
    <Path
      d="M8.43 20.501a1.435 1.435 0 0 1-1.119-.53L.38 11.36a1.435 1.435 0 0 1 0-1.823L7.555.927a1.437 1.437 0 0 1 2.21 1.837l-6.414 7.692 6.2 7.692A1.435 1.435 0 0 1 8.43 20.5Z"
      fill={color}
    />
  </Svg>
);
