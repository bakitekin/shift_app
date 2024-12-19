import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const WarningSVG = props => (
  <Svg
    width={49}
    height={48}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} width={48} height={48} rx={24} fill="#FEF0C7" />
    <Path
      d="M24.5 28V24M24.5 20H24.51M34.5 24C34.5 29.5228 30.0228 34 24.5 34C18.9772 34 14.5 29.5228 14.5 24C14.5 18.4772 18.9772 14 24.5 14C30.0228 14 34.5 18.4772 34.5 24Z"
      stroke="#F79009"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default WarningSVG;
