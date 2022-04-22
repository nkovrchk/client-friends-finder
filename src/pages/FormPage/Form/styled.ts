import styled from 'styled-components';

import { FieldStyled } from 'components/Field/styled';

export const FormStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormInnerStyled = styled.div`
  width: 384px;
`;

export const FormBodyStyled = styled.div`
  display: flex;
  flex-direction: column;

  ${FieldStyled} {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }

  ${FieldStyled}:last-child {
    margin-bottom: 0;
  }
`;

export const FormFooterStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[4]}px;
`;
