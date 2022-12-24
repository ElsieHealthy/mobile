import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const InfoIcon = ({
  size = 24,
  color = Colors.Secondary.LightGreen,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
    <Path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm-.75 8.25a1.5 1.5 0 011.493 1.356l.007.144V15c0 .38.282.693.648.743l.102.007h.75a.75.75 0 01.102 1.493l-.102.007h-.75a2.25 2.25 0 01-2.245-2.096L11.25 15v-3.75h-.75a.75.75 0 01-.102-1.493l.102-.007h.75zM11.625 6l.123.007a1.125 1.125 0 11-.246 0L11.625 6z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
