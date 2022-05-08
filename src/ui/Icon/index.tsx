import styled, { css } from 'styled-components';

import { ITheme } from 'theme';

import { IIconProps } from './types';

const namedSize = {
  s: 16,
  m: 24,
  l: 32,
};

const size = ({ size = 'm' }: IIconProps) => `${namedSize[size]}px`;

const margin = ({ mr, mb, mt, ml, theme }: IIconProps & { theme: ITheme }) => css`
  ${ml ? `margin-left: ${theme.space[ml]}px;` : ''}
  ${mt ? `margin-top: ${theme.space[mt]}px;` : ''}
  ${mr ? `margin-right: ${theme.space[mr]}px;` : ''}
  ${mb ? `margin-bottom: ${theme.space[mb]}px;` : ''}
`;

const color = ({ color, theme }: IIconProps & { theme: ITheme }) => {
  if (color)
    return css`
      color: ${theme.colors[color]};
    `;
};

export const Icon = styled.span<IIconProps>`
  width: ${size};
  height: ${size};

  ${margin}
  ${color}

  display: inline-block;

  & > svg {
    fill: currentColor;
  }

  &:first-child:last-child {
    width: 100%;
    height: 100%;
  }

  &[data-inline-offset] {
    vertical-align: baseline;
    position: relative;
  }
`;
