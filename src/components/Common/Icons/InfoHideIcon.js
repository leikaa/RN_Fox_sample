import React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

const InfoHideIcon = ({onPress}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="21"
    viewBox="0 0 28 21"
    onPress={onPress}>
    <Defs>
      <ClipPath
        id="t71ea">
        <Path
          fill="#fff"
          d="M13 3.365C21.551 3.365 26 12 26 12s-4.45 8.818-13 8.818S0 12 0 12s4.449-8.635 13-8.635z"/>
      </ClipPath>
      <ClipPath
        id="t71eb">
        <Path
          fill="#fff"
          d="M8 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"/>
      </ClipPath>
    </Defs>
    <G>
      <G>
        <G>
          <Path
            fill="none"
            stroke="#95a9bb"
            stroke-miterlimit="50"
            stroke-width="4"
            d="M13 3.365C21.551 3.365 26 12 26 12v0s-4.45 8.818-13 8.818S0 12 0 12v0s4.449-8.635 13-8.635z"
            clip-path="url(&quot;#t71ea&quot;)"/>
        </G>
        <G>
          <Path
            fill="none"
            stroke="#95a9bb"
            stroke-miterlimit="50"
            stroke-width="4"
            d="M8 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"
            clip-path="url(&quot;#t71eb&quot;)"/>
        </G>
        <G>
          <Path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M13.484 12.031l.016-.002"/>
        </G>
        <G>
          <Path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M26.484 1.002V1"/>
        </G>
      </G>
    </G>
  </Svg>
);

export default InfoHideIcon;
