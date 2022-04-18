import styled from 'styled-components';

export const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainPageFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.space[4]}px 0;
  margin-top: ${({ theme }) => theme.space[8]}px;
`;

export const MainPageInner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[16]}px 0;
`;
