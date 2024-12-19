import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';
const SunSVG = props => (
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
    <G clipPath="url(#clip0_135_5231)">
      <Path
        d="M17.9998 10.6667V12M17.9998 24V25.3333M12.8132 12.8133L13.7598 13.76M22.2398 22.24L23.1865 23.1867M10.6665 18H11.9998M23.9998 18H25.3332M12.8132 23.1867L13.7598 22.24M22.2398 13.76L23.1865 12.8133M21.3332 18C21.3332 19.8409 19.8408 21.3333 17.9998 21.3333C16.1589 21.3333 14.6665 19.8409 14.6665 18C14.6665 16.159 16.1589 14.6667 17.9998 14.6667C19.8408 14.6667 21.3332 16.159 21.3332 18Z"
        stroke="#444CE7"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_135_5231">
        <Rect
          width={16}
          height={16}
          fill="white"
          transform="translate(10 10)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SunSVG;
