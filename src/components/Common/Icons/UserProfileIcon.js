import React from 'react';
import Svg, {Path, G, Rect} from 'react-native-svg';

const UserAccountIcon = ({color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <Path fill={color} d="M12.1,4.9c3.9,0,7.1,3.2,7.1,7.1s-3.2,7.1-7.1,7.1S5,15.9,5,12S8.2,4.9,12.1,4.9 M12.1,3.9C7.6,3.9,4,7.5,4,12
      s3.6,8.1,8.1,8.1s8.1-3.6,8.1-8.1S16.6,3.9,12.1,3.9L12.1,3.9z"/>
    <G>
      <Path fill={color}
            d="M12.1,18.1c2.2,0,4.1-1.1,5.2-2.8c-1.1-1.4-3-2-5.2-2s-4.1,0.6-5.2,2C8.1,17,10,18.1,12.1,18.1z"/>
    </G>
    <Path fill={color} d="M12.2,6.3h-0.5c-1.2,0-2.2,1-2.2,2.2v2.1c0,1.4,1.1,2.5,2.5,2.5h0c1.4,0,2.5-1.1,2.5-2.5V8.5
      C14.5,7.3,13.5,6.3,12.2,6.3z"/>
    <Rect x="10.5" y="10.9" fill={color} width="3" height="3.9"/>
  </Svg>
);

export default UserAccountIcon;
