import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const FlagSoftSVG = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={32} height={32} rx={16} fill="#E9EAEB" />
    <Path
      d="M10.6666 18C10.6666 18 11.3333 17.3333 13.3333 17.3333C15.3333 17.3333 16.6666 18.6667 18.6666 18.6667C20.6666 18.6667 21.3333 18 21.3333 18V9.99999C21.3333 9.99999 20.6666 10.6667 18.6666 10.6667C16.6666 10.6667 15.3333 9.33333 13.3333 9.33333C11.3333 9.33333 10.6666 9.99999 10.6666 9.99999V18ZM10.6666 18V22.6667"
      stroke="#A4A7AE"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default FlagSoftSVG;
