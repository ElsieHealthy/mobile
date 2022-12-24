import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../Colors';

export const Trash: React.FunctionComponent<IconProps> = ({
  size = 24,
  color = Colors.Primary.Grey,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.75.75h4.5A2.25 2.25 0 0 1 16.5 3v.75h6a.75.75 0 0 1 .102 1.493l-.102.007h-1.56l-1.328 15.936a2.25 2.25 0 0 1-2.242 2.064H6.631a2.25 2.25 0 0 1-2.242-2.064L3.059 5.25H1.5a.75.75 0 0 1-.102-1.493L1.5 3.75h6V3A2.25 2.25 0 0 1 9.75.75Zm-.75 3h6V3a.75.75 0 0 0-.648-.743l-.102-.007h-4.5A.75.75 0 0 0 9 3v.75Zm-4.435 1.5 1.318 15.812c.03.354.301.633.643.68l.105.008H17.37c.39 0 .715-.3.748-.688L19.434 5.25H4.565Zm5.928 4.398A.75.75 0 0 0 9 9.75v7.5l.007.102a.75.75 0 0 0 1.493-.102v-7.5l-.007-.102ZM14.25 9a.75.75 0 0 1 .743.648L15 9.75v7.5a.75.75 0 0 1-1.493.102l-.007-.102v-7.5a.75.75 0 0 1 .75-.75Z"
      fill={color}
    />
  </Svg>
);
