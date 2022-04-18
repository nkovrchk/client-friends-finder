import styled from 'styled-components';
import { typography, space } from 'styled-system';

import { IText } from './types';

export const Text = styled.div<IText>`
  ${({ $color, theme }) => {
    if ($color) return `color: ${theme.colors[$color]};`;
  }}

  ${({ $variant, theme }) => ($variant ? theme.typography[$variant] : theme.typography.body2Regular)};
  ${({ $center }) => ($center ? 'text-align: center' : '')};

  ${typography}
  ${space}
`;

Text.defaultProps = {
  $variant: 'body2Regular',
};
