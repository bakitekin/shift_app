import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const SoftBell = props => (
  <Svg
    width={46}
    height={46}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={3} y={3} width={40} height={40} rx={20} fill="#F5F5F5" />
    <Rect
      x={3}
      y={3}
      width={40}
      height={40}
      rx={20}
      stroke="#FAFAFA"
      strokeWidth={6}
    />
    <Path
      d="M24.4417 30.5C24.2952 30.7526 24.0849 30.9622 23.8319 31.1079C23.5788 31.2537 23.292 31.3304 23 31.3304C22.708 31.3304 22.4212 31.2537 22.1681 31.1079C21.9151 30.9622 21.7048 30.7526 21.5583 30.5M28 19.6667C28 18.3406 27.4732 17.0688 26.5355 16.1311C25.5979 15.1935 24.3261 14.6667 23 14.6667C21.6739 14.6667 20.4021 15.1935 19.4645 16.1311C18.5268 17.0688 18 18.3406 18 19.6667C18 25.5 15.5 27.1667 15.5 27.1667H30.5C30.5 27.1667 28 25.5 28 19.6667Z"
      stroke="#D5D7DA"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SoftBell;
