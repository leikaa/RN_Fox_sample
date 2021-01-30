import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowBackIcon = ({color, width, height}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 7 12"
  >
    <Path
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="50"
      stroke-width="1.5"
      d="M6.112 10.865v0L1.3 6.054v0l4.812-4.812v0"
    />
  </Svg>
);

export default ArrowBackIcon;
