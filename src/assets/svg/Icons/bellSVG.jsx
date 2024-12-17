import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ThemeColor from '../../../theme';
const BellSVG = props => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.15333 14C9.03613 14.2021 8.8679 14.3698 8.66548 14.4864C8.46307 14.6029 8.23359 14.6643 8 14.6643C7.76641 14.6643 7.53693 14.6029 7.33452 14.4864C7.13211 14.3698 6.96387 14.2021 6.84667 14M12 5.33334C12 4.27247 11.5786 3.25505 10.8284 2.50491C10.0783 1.75476 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.75476 5.17157 2.50491C4.42143 3.25505 4 4.27247 4 5.33334C4 10 2 11.3333 2 11.3333H14C14 11.3333 12 10 12 5.33334Z"
      stroke="#717680"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BellSVG;
