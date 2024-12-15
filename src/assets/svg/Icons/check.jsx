import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Check = props => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 3L4.5 8.5L2 6"
      stroke="#027A48"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Check;
