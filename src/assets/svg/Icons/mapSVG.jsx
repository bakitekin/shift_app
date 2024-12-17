import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const MapSVG = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_8_149)">
      <Path
        d="M6.66671 15L0.833374 18.3333V5.00001L6.66671 1.66667M6.66671 15L13.3334 18.3333M6.66671 15V1.66667M13.3334 18.3333L19.1667 15V1.66667L13.3334 5.00001M13.3334 18.3333V5.00001M13.3334 5.00001L6.66671 1.66667"
        stroke="#717680"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_8_149">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MapSVG;
