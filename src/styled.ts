import styled from 'styled-components';

export const ModalContainer = styled.div`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :focus {
    outline: none;
  }

  svg {
    pointer-events: none;
  }

  path {
    pointer-events: none;
  }

  input {
    &::-ms-clear {
      display: none;
    }
  }
`;

export const PageContainer = styled(ModalContainer)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 68px;
`;

export const AppContainer = styled(ModalContainer)`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -80px;
`;

export const RouteContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 ${({ theme }) => theme.space[20]}px;
`;
