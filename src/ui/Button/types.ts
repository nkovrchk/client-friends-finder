import { SpaceProps } from 'styled-system';

import { buttonSizes, buttonTypes } from './const';

export interface IButtonProps extends SpaceProps {
  $type?: keyof typeof buttonTypes;
  $size?: keyof typeof buttonSizes;
  $fullWidth?: boolean;
}
