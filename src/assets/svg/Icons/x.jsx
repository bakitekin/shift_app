import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const x = props => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 3L3 9M3 3L9 9"
      stroke="#B42318"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default x;
