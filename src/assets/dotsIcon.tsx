import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const DotsIcon: React.FC<Props> = ({
  height = 60,
  width = 60,
  color,
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      x="0px"
      y="0px"
      viewBox="0 0 341.333 341.333"
      {...others}>
      <Path
        d="M42.667 128C19.093 128 0 147.093 0 170.667s19.093 42.667 42.667 42.667c23.573 0 42.667-19.093 42.667-42.667S66.24 128 42.667 128zM170.667 128C147.093 128 128 147.093 128 170.667s19.093 42.667 42.667 42.667 42.667-19.093 42.667-42.667S194.24 128 170.667 128zM298.667 128C275.093 128 256 147.093 256 170.667s19.093 42.667 42.667 42.667c23.573 0 42.667-19.093 42.667-42.667S322.24 128 298.667 128z"
        fill="white"
      />
    </Svg>
  );
};
