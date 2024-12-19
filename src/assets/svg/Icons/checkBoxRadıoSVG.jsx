import * as React from 'react';
import Svg, {Rect, Circle} from 'react-native-svg';
const CheckBoxRadıoSVG = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} fill="#EEF4FF" />
    <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} stroke="#6172F3" />
    <Circle cx={10} cy={10} r={4} fill="#6172F3" />
  </Svg>
);
export default CheckBoxRadıoSVG;
