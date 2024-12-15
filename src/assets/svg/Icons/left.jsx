import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Left = props => (
  <Svg
    width={13}
    height={12}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5 9L8 6L5 3"
      stroke="#EC4A0A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Left;
