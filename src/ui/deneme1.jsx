import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const Deneme1 = props => (
  <Svg
    width={78}
    height={80}
    viewBox="0 0 78 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M40 35H38C34.134 35 31 38.134 31 42H47C47 38.134 43.866 35 40 35Z"
      stroke="#A4A7AE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={39}
      cy={28}
      r={4}
      stroke="#A4A7AE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M25.117 63V54.2727H28.2278C28.9068 54.2727 29.4693 54.3963 29.9153 54.6435C30.3613 54.8906 30.6951 55.2287 30.9167 55.6577C31.1383 56.0838 31.2491 56.5639 31.2491 57.098C31.2491 57.6349 31.1369 58.1179 30.9125 58.5469C30.6909 58.973 30.3556 59.3111 29.9068 59.5611C29.4608 59.8082 28.8997 59.9318 28.2235 59.9318H26.0843V58.8153H28.1042C28.5332 58.8153 28.8812 58.7415 29.1483 58.5938C29.4153 58.4432 29.6113 58.2386 29.7363 57.9801C29.8613 57.7216 29.9238 57.4276 29.9238 57.098C29.9238 56.7685 29.8613 56.4759 29.7363 56.2202C29.6113 55.9645 29.4139 55.7642 29.144 55.6193C28.877 55.4744 28.5247 55.402 28.0872 55.402H26.4338V63H25.117ZM32.6905 63V56.4545H33.9221V57.4943H33.9902C34.1096 57.142 34.3198 56.8651 34.6209 56.6634C34.9249 56.4588 35.2686 56.3565 35.6522 56.3565C35.7317 56.3565 35.8255 56.3594 35.9334 56.3651C36.0442 56.3707 36.1309 56.3778 36.1934 56.3864V57.6051C36.1422 57.5909 36.0513 57.5753 35.9206 57.5582C35.79 57.5384 35.6593 57.5284 35.5286 57.5284C35.2275 57.5284 34.959 57.5923 34.7232 57.7202C34.4902 57.8452 34.3056 58.0199 34.1692 58.2443C34.0328 58.4659 33.9647 58.7187 33.9647 59.0028V63H32.6905ZM39.8187 63.1321C39.2051 63.1321 38.6696 62.9915 38.2122 62.7102C37.7548 62.429 37.3997 62.0355 37.1468 61.5298C36.894 61.0241 36.7676 60.4332 36.7676 59.7571C36.7676 59.0781 36.894 58.4844 37.1468 57.9759C37.3997 57.4673 37.7548 57.0724 38.2122 56.7912C38.6696 56.5099 39.2051 56.3693 39.8187 56.3693C40.4324 56.3693 40.9679 56.5099 41.4252 56.7912C41.8826 57.0724 42.2377 57.4673 42.4906 57.9759C42.7434 58.4844 42.8699 59.0781 42.8699 59.7571C42.8699 60.4332 42.7434 61.0241 42.4906 61.5298C42.2377 62.0355 41.8826 62.429 41.4252 62.7102C40.9679 62.9915 40.4324 63.1321 39.8187 63.1321ZM39.823 62.0625C40.2207 62.0625 40.5502 61.9574 40.8116 61.7472C41.073 61.5369 41.2662 61.2571 41.3912 60.9077C41.519 60.5582 41.5829 60.1733 41.5829 59.7528C41.5829 59.3352 41.519 58.9517 41.3912 58.6023C41.2662 58.25 41.073 57.9673 40.8116 57.7543C40.5502 57.5412 40.2207 57.4347 39.823 57.4347C39.4224 57.4347 39.09 57.5412 38.8258 57.7543C38.5645 57.9673 38.3699 58.25 38.242 58.6023C38.117 58.9517 38.0545 59.3352 38.0545 59.7528C38.0545 60.1733 38.117 60.5582 38.242 60.9077C38.3699 61.2571 38.5645 61.5369 38.8258 61.7472C39.09 61.9574 39.4224 62.0625 39.823 62.0625ZM47.4071 56.4545V57.4773H43.7083V56.4545H47.4071ZM44.7225 63V55.696C44.7225 55.2869 44.812 54.9474 44.9909 54.6776C45.1699 54.4048 45.4071 54.2017 45.7026 54.0682C45.998 53.9318 46.3191 53.8636 46.6657 53.8636C46.9213 53.8636 47.1401 53.8849 47.3219 53.9276C47.5037 53.9673 47.6387 54.0043 47.7267 54.0384L47.4284 55.0696C47.3688 55.0526 47.2921 55.0327 47.1983 55.0099C47.1046 54.9844 46.9909 54.9716 46.8574 54.9716C46.5478 54.9716 46.3262 55.0483 46.1926 55.2017C46.062 55.3551 45.9966 55.5767 45.9966 55.8665V63H44.7225ZM48.7218 63V56.4545H49.9959V63H48.7218ZM49.3652 55.4446C49.1436 55.4446 48.9533 55.3707 48.7942 55.223C48.638 55.0724 48.5598 54.8935 48.5598 54.6861C48.5598 54.4759 48.638 54.2969 48.7942 54.1491C48.9533 53.9986 49.1436 53.9233 49.3652 53.9233C49.5868 53.9233 49.7757 53.9986 49.932 54.1491C50.0911 54.2969 50.1706 54.4759 50.1706 54.6861C50.1706 54.8935 50.0911 55.0724 49.932 55.223C49.7757 55.3707 49.5868 55.4446 49.3652 55.4446ZM52.9842 54.2727V63H51.71V54.2727H52.9842Z"
      fill="#A4A7AE"
    />
  </Svg>
);
export default Deneme1;
