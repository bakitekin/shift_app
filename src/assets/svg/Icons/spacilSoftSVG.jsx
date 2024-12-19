import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const SpacialSoftSVG = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={32} height={32} rx={16} fill="#E9EAEB" />
    <Path
      d="M16.6667 9.33334L10 17.3333H16L15.3333 22.6667L22 14.6667H16L16.6667 9.33334Z"
      stroke="#A4A7AE"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SpacialSoftSVG;
