import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  others?: any;
}

export const MusicIcon: React.FC<Props> = ({
  height = 512,
  width = 512,
  ...others
}) => {
  return (
    <Svg height={height} viewBox="0 0 512 512" width={width} {...others}>
      <Path
        d="M481 0v362c0 49.8-40.5 90-90 90-26.82 0-47.94-11.95-60-23.4-18.3-16.2-30-40.2-30-66.6s11.7-50.4 30-66.9c15.9-14.4 37.2-23.1 60-23.1 36.01 0 59.09 22.62 60 23.4V157.2l-120 26.7-120 26.7V422c0 49.5-40.5 90-90 90s-90-40.5-90-90 40.5-90 90-90c23.1 0 44.1 9 60 23.4V66.6z"
        fill="#4da6ff"
      />
      <Path
        d="M481 0v362c0 49.8-40.5 90-90 90-26.82 0-47.94-11.95-60-23.4V295.1c15.9-14.4 37.2-23.1 60-23.1 36.01 0 59.09 22.62 60 23.4V157.2l-120 26.7V33.3z"
        fill="#37f"
      />
    </Svg>
  );
};
