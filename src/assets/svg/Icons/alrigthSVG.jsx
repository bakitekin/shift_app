import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const AlrigthSVG = props => (
  <Svg
    width={49}
    height={48}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} width={48} height={48} rx={24} fill="#D1FADF" />
    <Path
      d="M24.5 34C30 34 34.5 29.5 34.5 24C34.5 18.5 30 14 24.5 14C19 14 14.5 18.5 14.5 24C14.5 29.5 19 34 24.5 34Z"
      stroke="#12B76A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.25 24L23.08 26.83L28.75 21.17"
      stroke="#12B76A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default AlrigthSVG;
