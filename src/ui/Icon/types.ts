import { IColors } from 'theme';

export interface IIconProps {
  size?: 's' | 'm' | 'l';
  color?: keyof IColors;
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
}
