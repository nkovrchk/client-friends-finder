import styled from 'styled-components';

import { variants } from 'theme';

export const FieldStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  ${variants.body2Regular};

  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;
