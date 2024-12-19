import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FlagSVG = props => (
  <Svg
    width={12}
    height={16}
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0.666504 9.99998C0.666504 9.99998 1.33317 9.33331 3.33317 9.33331C5.33317 9.33331 6.6665 10.6666 8.6665 10.6666C10.6665 10.6666 11.3332 9.99998 11.3332 9.99998V1.99998C11.3332 1.99998 10.6665 2.66665 8.6665 2.66665C6.6665 2.66665 5.33317 1.33331 3.33317 1.33331C1.33317 1.33331 0.666504 1.99998 0.666504 1.99998V9.99998ZM0.666504 9.99998V14.6666"
      stroke="#444CE7"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default FlagSVG;
