import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../../Colors';

export const ThreeWheeler: React.FunctionComponent<IconProps> = ({
  size = 24,
  color = Colors.Secondary.LightGreen,
  ...rest
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 18" {...rest}>
    <Path
      d="M1.295 10.293c0-.423-.427-.765-.95-.765v1.53c.523 0 .95-.343.95-.765Z"
      fill={color}
    />
    <Path
      d="M20.918 0H4.024v1.361h1.25c-.983.607-2.384 2.72-2.384 2.72S.126 9.486 1.87 11.793c4.423-.114 4.082 4.082 4.082 4.082h10.907a3.3 3.3 0 0 1-.22-1.181 3.334 3.334 0 0 1 3.33-3.33 3.334 3.334 0 0 1 3.33 3.33c0 .146-.012.29-.031.432A4.074 4.074 0 0 0 25 11.791v-7.71A4.08 4.08 0 0 0 20.918 0Zm-9.987 14.693H7.927s.517-4.13-3.004-5.166c0 0 .112-5.382 2.72-7.455h3.288v12.62Zm7.662-5.166c-3.522 1.036-3.006 5.166-3.006 5.166h-3.004V2.073h6.01v7.454Z"
      fill={color}
    />
    <Path
      d="M4.554 12.71c-1.133-.972-2.583-.809-2.644-.802l.07.57A2.544 2.544 0 0 0 0 14.953c0 1.4 1.14 2.54 2.54 2.54 1.34 0 2.44-1.047 2.531-2.363.038.236.065.486.074.754l.68-.02c-.045-1.407-.473-2.468-1.271-3.154ZM2.54 16.812a1.86 1.86 0 0 1-1.86-1.859 1.86 1.86 0 1 1 1.86 1.859ZM19.871 11.993a2.701 2.701 0 0 0-2.698 2.7c0 1.489 1.21 2.7 2.698 2.7s2.7-1.211 2.7-2.7-1.212-2.7-2.7-2.7Zm0 4.719a2.021 2.021 0 0 1-2.018-2.02 2.02 2.02 0 0 1 2.018-2.018c1.114 0 2.02.905 2.02 2.019 0 1.113-.907 2.019-2.02 2.019Z"
      fill={color}
    />
  </Svg>
);
