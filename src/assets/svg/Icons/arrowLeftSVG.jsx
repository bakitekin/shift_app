import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ArrowLeftSVG = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.57 5.92999L3.5 12L9.57 18.07"
      stroke="#181D27"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.5 12H3.66998"
      stroke="#181D27"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowLeftSVG;
