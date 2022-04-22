import styled from 'styled-components';

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: ${({ theme }) => theme.space[3]}px;
`;
