import styled from 'styled-components';

import { Text } from 'ui/Text';

export const HowToStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 80px;
  background: ${({ theme }) => theme.colors.todo05};
`;

export const HowToBlock = styled.div`
  & > ${Text}:first-child {
    padding-top: 32px;
    padding-bottom: 16px;
  }
`;
