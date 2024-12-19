import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ThemeColor from '../../../theme';
const EditSVG = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.16675 3.33332H3.33341C2.89139 3.33332 2.46746 3.50891 2.1549 3.82147C1.84234 4.13403 1.66675 4.55796 1.66675 4.99999V16.6667C1.66675 17.1087 1.84234 17.5326 2.1549 17.8452C2.46746 18.1577 2.89139 18.3333 3.33341 18.3333H15.0001C15.4421 18.3333 15.866 18.1577 16.1786 17.8452C16.4912 17.5326 16.6667 17.1087 16.6667 16.6667V10.8333M15.4167 2.08332C15.7483 1.7518 16.1979 1.56555 16.6667 1.56555C17.1356 1.56555 17.5852 1.7518 17.9167 2.08332C18.2483 2.41484 18.4345 2.86448 18.4345 3.33332C18.4345 3.80216 18.2483 4.2518 17.9167 4.58332L10.0001 12.5L6.66675 13.3333L7.50008 9.99999L15.4167 2.08332Z"
      stroke={ThemeColor.light.PRIMARY}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default EditSVG;
