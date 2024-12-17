import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeSVG = ({stroke = '#717680', fill = 'none', ...props}) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.7502 18L12.7502 15"
      stroke={stroke} // Dinamik renk
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3.10157 13.2135C2.74855 10.9162 2.57204 9.76763 3.00635 8.74938C3.44065 7.73112 4.40421 7.03443 6.33132 5.64106L7.77117 4.6C10.1685 2.86667 11.3671 2 12.7502 2C14.1332 2 15.3319 2.86667 17.7292 4.6L19.169 5.64106C21.0962 7.03443 22.0597 7.73112 22.494 8.74938C22.9283 9.76763 22.7518 10.9162 22.3988 13.2135L22.0978 15.1724C21.5973 18.4289 21.3471 20.0572 20.1792 21.0286C19.0113 22 17.3038 22 13.889 22H11.6114C8.19652 22 6.48909 22 5.32118 21.0286C4.15327 20.0572 3.90305 18.4289 3.40261 15.1724L3.10157 13.2135Z"
      stroke={stroke} // Dinamik renk
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeSVG;
