import React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

const InfoShowIcon = ({onPress}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="24"
    viewBox="0 0 29 24"
    onPress={onPress}>
    <Defs>
      <ClipPath
        id="4owxa">
        <Path
          fill="#fff"
          d="M14 3.365C22.551 3.365 27 12 27 12s-4.45 8.818-13 8.818S1 12 1 12s4.449-8.635 13-8.635z"/>
      </ClipPath>
      <ClipPath
        id="4owxb">
        <Path
          fill="#fff"
          d="M9 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"/>
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
            d="M14 3.365C22.551 3.365 27 12 27 12v0s-4.45 8.818-13 8.818S1 12 1 12v0s4.449-8.635 13-8.635z"
            clip-path="url(&quot;#4owxa&quot;)"/>
        </G>
        <G>
          <Path
            fill="none"
            stroke="#95a9bb"
            stroke-miterlimit="50"
            stroke-width="4"
            d="M9 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"
            clip-path="url(&quot;#4owxb&quot;)"/>
        </G>
        <G>
          <Path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M1.5 23l26-21.5"/>
        </G>
        <G>
          <Path
            fill="none"
            stroke="#95a9bb"
            stroke-linecap="round"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M1.5 21.5L26.5 1"/>
        </G>
      </G>
    </G>
  </Svg>
);

export default InfoShowIcon;
