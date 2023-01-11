import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const CalendarIcon = ({
  size = 24,
  color = Colors.Primary.Grey,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 25" {...rest}>
    <Path
      d="M18.548 4.113H5.478a4.357 4.357 0 0 0-4.356 4.356V19.36a4.356 4.356 0 0 0 4.357 4.357h13.07a4.356 4.356 0 0 0 4.356-4.357V8.47a4.357 4.357 0 0 0-4.357-4.357ZM1.122 10.647h21.783M7.657 1.934v4.357-4.357Zm8.713 0v4.357-4.357Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
