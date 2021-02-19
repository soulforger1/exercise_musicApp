import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const PlusIcon: React.FC<Props> = ({
  height = 512,
  width = 512,
  color = '#200E32',
  ...others
}) => {
  return (
    <Svg height={height} viewBox="0 0 24 24" width={width} {...others}>
      <Path
        d="M12 8.327v7.327M15.667 11.99H8.333"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
