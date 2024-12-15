import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const Featuredıcon = props => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={2} y={2} width={32} height={32} rx={16} fill="#E0EAFF" />
    <Rect
      x={2}
      y={2}
      width={32}
      height={32}
      rx={16}
      stroke="#EEF4FF"
      strokeWidth={4}
    />
    <Path
      d="M19.1533 24C19.0361 24.2021 18.8679 24.3698 18.6655 24.4864C18.4631 24.603 18.2336 24.6643 18 24.6643C17.7664 24.6643 17.5369 24.603 17.3345 24.4864C17.1321 24.3698 16.9639 24.2021 16.8467 24M22 15.3333C22 14.2725 21.5786 13.2551 20.8284 12.5049C20.0783 11.7548 19.0609 11.3333 18 11.3333C16.9391 11.3333 15.9217 11.7548 15.1716 12.5049C14.4214 13.2551 14 14.2725 14 15.3333C14 20 12 21.3333 12 21.3333H24C24 21.3333 22 20 22 15.3333Z"
      stroke="#444CE7"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Featuredıcon;
