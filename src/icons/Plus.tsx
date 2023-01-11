import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const PlusIcon = ({
  size = 24,
  color = Colors.Primary.Grey,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 17 17" {...rest}>
    <Path
      d="M10.787.483H6.111V5.93H.655v4.676h5.456v5.446h4.676v-5.446h5.456V5.93h-5.456V.483Z"
      fill={color}
    />
  </Svg>
);
