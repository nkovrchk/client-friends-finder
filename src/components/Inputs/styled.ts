import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => `11px ${theme.space[5]}px;`};
  border: 1px solid ${({ theme }) => theme.colors.inputsStroke};
  border-radius: ${({ theme }) => theme.space[1]}px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.inputsStrokeFocus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.inputsDisabled};
    color: ${({ theme }) => theme.colors.textDisabled};

    &::placeholder {
      color: ${({ theme }) => theme.colors.textDisabled};
    }
  }

  ${({ theme }) => theme.typography.body2Regular};
`;
