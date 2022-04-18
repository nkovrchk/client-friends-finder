import { colors } from './colors';
import { ITheme } from './types';
import { variants } from './variants';

export const theme: ITheme = {
  typography: variants,
  colors: colors,
  space: Array.from({ length: 51 }, (_, k) => k * 4),
};
