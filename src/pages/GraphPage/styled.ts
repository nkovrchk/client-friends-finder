import styled from 'styled-components';

import { Text } from '../../ui/Text';

export const GraphPageStyled = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const ActionText = styled(Text)`
  position: absolute;
  top: 8px;
  left: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textAction};
`;

export const GraphPageFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
`;
