import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Plus = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.99999 4.16666V15.8333M4.16666 9.99999H15.8333"
      stroke="#717680"
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Plus;
