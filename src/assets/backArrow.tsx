import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const BackIcon: React.FC<Props> = ({
  height = 512,
  width = 512,
  color = '#200E32',
  ...others
}) => {
  return (
    <Svg height={height} viewBox="0 0 24 24" width={width} {...others}>
      <Path
        clipRule="evenodd"
        d="M2.75 7.666v8.669c0 3.02 2.139 4.915 5.166 4.915h8.168c3.027 0 5.166-1.885 5.166-4.915v-8.67c0-3.03-2.139-4.915-5.166-4.915H7.916c-3.027 0-5.166 1.886-5.166 4.916z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.914 12h8.172M11.678 15.748L7.914 12l3.764-3.748"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
