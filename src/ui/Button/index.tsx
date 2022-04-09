import styled from 'styled-components';
import { variant } from 'styled-system';

import { buttonSizes, buttonTypes } from './const';
import { ButtonProps } from './types';

const buttonType = variant({
  prop: '$type',
  variants: buttonTypes,
});

const buttonSize = variant({
  prop: '$size',
  variants: buttonSizes,
});

export const Button = styled.button<ButtonProps>`
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

  ${buttonType}
  ${buttonSize}
`;
