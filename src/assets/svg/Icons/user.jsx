import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const User = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13 14H11C7.13401 14 4 17.134 4 21H20C20 17.134 16.866 14 13 14Z"
      stroke="#A4A7AE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={12}
      cy={7}
      r={4}
      stroke="#A4A7AE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default User;
