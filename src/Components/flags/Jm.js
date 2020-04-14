import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgJm(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <G fillRule="evenodd">
        <Path d="M0 0l320 240L0 480zm640 0L320 240l320 240z" />
        <Path fill="#090" d="M0 0l320 240L640 0zm0 480l320-240 320 240z" />
        <Path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z" />
        <Path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z" />
      </G>
    </Svg>
  );
}

export default SvgJm;
