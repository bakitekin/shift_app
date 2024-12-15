import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ThemeColor from '../../../theme';
const CheckDrown = props => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3 4.5L6 7.5L9 4.5"
      stroke={ThemeColor.TEXTGRAY}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckDrown;
