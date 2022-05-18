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

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageContainer = styled(ModalContainer)`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.space[20]}px;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 68px;
`;

export const FullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -80px;
`;
