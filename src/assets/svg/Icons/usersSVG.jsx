import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const UsersSVG = ({stroke = '#717680', fill = 'none', ...props}) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.75 5.5C18.6467 6.01871 19.25 6.88958 19.25 8.00001C19.25 9.11043 18.6467 9.98129 17.75 10.5M19.25 14.5C21.03 15.4897 22.25 17.6609 22.25 20"
      stroke={stroke} // Dinamik renk
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.75 5.5C5.8533 6.01871 5.25 6.88958 5.25 8.00001C5.25 9.11043 5.8533 9.98129 6.75 10.5M5.25 14.5C3.47002 15.4897 2.25 17.6609 2.25 20"
      stroke={stroke} // Dinamik renk
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.125 14.5H11.375C7.99226 14.5 5.25 17.4101 5.25 21H19.25C19.25 17.4101 16.5077 14.5 13.125 14.5Z"
      stroke={stroke} // Dinamik renk
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={12.25}
      cy={7.5}
      r={3.5}
      stroke={stroke} // Dinamik renk
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default UsersSVG;
