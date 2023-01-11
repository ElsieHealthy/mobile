import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const StethoscopeIcon = ({
  size = 24,
  color = Colors.Primary.Grey,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 26 26" {...rest}>
    <Path
      d="M9.287 16.29v.723a5.588 5.588 0 1 0 11.177 0V14.94a3.726 3.726 0 1 1 2.484 0v2.074a8.072 8.072 0 0 1-16.145 0v-.724A7.454 7.454 0 0 1 .594 8.941v-6.21A2.484 2.484 0 0 1 3.078.249H4.32a1.242 1.242 0 0 1 0 2.484H3.078v6.21a4.968 4.968 0 0 0 9.935 0v-6.21H11.77a1.242 1.242 0 0 1 0-2.484h1.242a2.484 2.484 0 0 1 2.484 2.484v6.21a7.453 7.453 0 0 1-6.21 7.347Zm12.419-3.623a1.242 1.242 0 1 0 0-2.484 1.242 1.242 0 0 0 0 2.484Z"
      fill={color}
    />
  </Svg>
);
