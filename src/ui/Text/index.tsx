import styled from 'styled-components';
import { typography, space } from 'styled-system';

import { theme } from 'theme';

import { IText } from './types';

export const Text = styled.div<IText>`
  ${({ $color }) => ($color ? theme.colors[$color] : theme.colors.textPrimary)};
  ${({ $variant }) => ($variant ? theme.typography[$variant] : theme.typography.body2Regular)};

  ${typography}
  ${space}
`;
