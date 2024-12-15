import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Filter = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18.3333 2.5H1.66666L8.33332 10.3833V15.8333L11.6667 17.5V10.3833L18.3333 2.5Z"
      stroke="#717680"
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Filter;
