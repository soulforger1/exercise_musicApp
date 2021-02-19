import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  others?: any;
}

export const ReviewIcon: React.FC<Props> = ({
  height = 512,
  width = 512,
  ...others
}) => {
  return (
    <Svg height={height} viewBox="0 0 512 512" width={width} {...others}>
      <Path
        d="M383.008 45v422c0 24.81-20.19 45-45 45h-293c-24.81 0-45-20.19-45-45V45c0-24.81 20.19-45 45-45h293c24.81 0 45 20.19 45 45z"
        fill="#ffef00"
      />
      <Path
        d="M383.008 45v422c0 24.81-20.19 45-45 45h-146V0h146c24.81 0 45 20.19 45 45z"
        fill="#ffd800"
      />
      <Path
        d="M319.008 112c0 8.28-6.72 15-15 15h-224c-8.28 0-15-6.72-15-15s6.72-15 15-15h224c8.28 0 15 6.72 15 15z"
        fill="#425796"
      />
      <Path
        d="M319.008 112c0 8.28-6.72 15-15 15h-113V97h113c8.28 0 15 6.72 15 15z"
        fill="#283758"
      />
      <Path
        d="M271.008 192c0 8.28-6.72 15-15 15h-176c-8.28 0-15-6.72-15-15s6.72-15 15-15h176c8.28 0 15 6.72 15 15z"
        fill="#425796"
      />
      <Path
        d="M271.008 192c0 8.28-6.72 15-15 15h-65v-30h65c8.28 0 15 6.72 15 15z"
        fill="#283758"
      />
      <Path
        d="M223.008 272c0 8.28-6.72 15-15 15h-128c-8.28 0-15-6.72-15-15s6.72-15 15-15h128c8.28 0 15 6.72 15 15z"
        fill="#425796"
      />
      <Path
        d="M223.008 272c0 8.28-6.72 15-15 15h-17v-30h17c8.28 0 15 6.72 15 15z"
        fill="#283758"
      />
    </Svg>
  );
};
