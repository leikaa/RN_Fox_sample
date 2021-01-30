import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LockIcon = ({color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="28"
    viewBox="0 0 16 18"
  >
    <Path
      fill={color}
      d="M14.309 8.848v7.763H1.766V8.848zM4.308 5.212c0-1.861 1.672-3.795 3.719-3.795 2.046 0 3.796 1.934 3.796 3.787v2.464l-7.515.008zM8.027.2a5.01 5.01 0 0 0-5.004 5.004v2.464H1.42a.815.815 0 0 0-.82.819v8.535c0 .455.365.819.82.819h13.224a.815.815 0 0 0 .819-.819V8.495a.815.815 0 0 0-.819-.819H13.04V5.212A5.02 5.02 0 0 0 8.027.2z"
    />
  </Svg>
);

export default LockIcon;
