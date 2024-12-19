import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const BellCancel = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_152_2303)">
      <Path
        d="M17.1533 22C17.0361 22.202 16.8679 22.3698 16.6654 22.4863C16.463 22.6029 16.2335 22.6643 16 22.6643C15.7664 22.6643 15.5369 22.6029 15.3345 22.4863C15.1321 22.3698 14.9638 22.202 14.8466 22M20.42 16.6667C20.1234 15.5809 19.982 14.4587 20 13.3333C20.001 12.6087 19.8052 11.8974 19.4335 11.2754C19.0618 10.6534 18.5281 10.144 17.8894 9.80175C17.2507 9.45947 16.531 9.29712 15.8072 9.33203C15.0834 9.36695 14.3827 9.59782 13.78 9.99999M12.1733 12.1733C12.0575 12.5491 11.999 12.9401 12 13.3333C12 18 9.99996 19.3333 9.99996 19.3333H19.3333M8.66663 8.66666L23.3333 23.3333"
        stroke="#D5D7DA"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_152_2303">
        <Rect width={16} height={16} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BellCancel;
