import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const CheckBoxSVG = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={19} height={19} rx={5.5} fill="#EEF4FF" />
    <Rect x={0.5} y={0.5} width={19} height={19} rx={5.5} stroke="#6172F3" />
    <Path
      d="M14.6667 6.5L8.25004 12.9167L5.33337 10"
      stroke="#6172F3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckBoxSVG;
