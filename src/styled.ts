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
  position: relative;
  margin: 0 ${({ theme }) => theme.space[20]}px;
  padding: ${({ theme }) => theme.space[10]}px 0;
  min-height: calc(100vh - 104px);
`;

export const AppContainer = styled(ModalContainer)`
  position: relative;
  padding-top: 68px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
