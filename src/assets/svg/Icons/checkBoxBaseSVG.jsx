import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
const CheckBoxBaseSVG = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={19} height={19} rx={5.5} fill="white" />
    <Rect x={0.5} y={0.5} width={19} height={19} rx={5.5} stroke="#D5D7DA" />
  </Svg>
);
export default CheckBoxBaseSVG;
