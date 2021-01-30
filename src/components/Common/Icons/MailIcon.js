import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MailIcon = ({color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="28"
    viewBox="0 0 16 12"
  >
    <Path
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="50"
      stroke-width="1.2"
      d="M14.931.87v0H1.128v9.88H14.93v0V.87v0L7.99 7.15v0S3.013 2.553 1.128.869"
    />
  </Svg>
);

export default MailIcon;
