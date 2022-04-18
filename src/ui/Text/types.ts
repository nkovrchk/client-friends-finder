import { SpaceProps, TypographyProps } from 'styled-system';

import { IColors, theme } from 'theme';

export interface IText extends SpaceProps, TypographyProps {
  $color?: keyof IColors;
  $variant?: keyof typeof theme.typography;
  $center?: boolean;
}
