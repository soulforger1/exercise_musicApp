import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const TrackIcon: React.FC<Props> = ({
  height = 24,
  width = 24,
  color = '#200E32',
  ...others
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" {...others}>
      <Path
        d="M506.617 3.489a14.997 14.997 0 00-12.285-3.25l-332 60A15.001 15.001 0 00150 75v279.98C134.065 340.7 113.031 332 90 332c-49.626 0-90 40.374-90 90s40.374 90 90 90 90-40.374 90-90V197.532l302-54.578v167.027C466.065 295.7 445.031 287 422 287c-49.626 0-90 40.374-90 90s40.374 90 90 90 90-40.374 90-90V15c0-4.445-1.971-8.661-5.383-11.511zM90 482c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60zm90-314.953V87.533l302-54.579v79.514zM422 437c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60z"
        fill={color}
      />
    </Svg>
  );
};
