import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const SpacialSVG = props => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={2} y={2} width={32} height={32} rx={16} fill="#D1FADF" />
    <Rect
      x={2}
      y={2}
      width={32}
      height={32}
      rx={16}
      stroke="#ECFDF3"
      strokeWidth={4}
    />
    <Path
      d="M18.6667 11.3333L12 19.3333H18L17.3333 24.6667L24 16.6667H18L18.6667 11.3333Z"
      stroke="#039855"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SpacialSVG;
