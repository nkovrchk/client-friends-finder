import styled from 'styled-components';

import { Button } from '../../ui/Button';

export const LoginPageStyled = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex: 1;
`;

export const LoginFormStyled = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.space[17]}px;
`;

export const VKButton = styled(Button)`
  background-color: rgb(63, 138, 224);
  border: none;

  &:hover {
    background-color: rgb(63, 138, 224);
  }

  &:active {
    background-color: rgb(63, 138, 224);
  }
`;
