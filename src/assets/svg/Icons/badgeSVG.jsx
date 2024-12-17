import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BadgeSVG = props => (
  <Svg
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
      fill="#FD853A"
      stroke="#EC4A0A"
      strokeWidth={1.71429}
    />
  </Svg>
);
export default BadgeSVG;
