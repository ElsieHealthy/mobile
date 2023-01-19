type IconProps = {
  size?: number;
  color?: string;
  fill?: string;
  width?: number;
  height?: number;
  up?: boolean;
  inline?: boolean;
  marginX?: number;
  style?: StyleProp<ViewStyle>;
};

interface Mood {
  text: string;
  type: string;
  image: any;
  backgroundColor: string;
}
