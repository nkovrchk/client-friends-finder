import styled from 'styled-components';
import { variant } from 'styled-system';

import { buttonPaddings, buttonSizes, buttonTypes } from './const';
import { IButtonProps } from './types';

const buttonType = variant({
  prop: '$type',
  variants: buttonTypes,
});

const buttonSize = variant({
  prop: '$size',
  variants: buttonSizes,
});

const buttonPadding = variant({
  prop: '$size',
  variants: buttonPaddings,
});

export const Button = styled.button<IButtonProps>`
  border: 1px solid;
  padding: 0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;

  border-radius: ${({ theme }) => theme.space[2]}px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  transition: ease-in-out background-color 0.15s, ease-in-out border-color 0.15s;

  ${buttonType};
  ${buttonSize};
  ${buttonPadding}
`;

Button.defaultProps = {
  $size: 's',
  $type: 'primary',
};
