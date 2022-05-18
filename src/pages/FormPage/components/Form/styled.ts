import styled from 'styled-components';

import { FieldStyled } from 'components/Field/styled';
import { Icon } from 'ui/Icon';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FormFieldsStyled = styled.div`
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
  position: fixed;
  width: 100%;
  padding: ${({ theme }) => theme.space[4]}px 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(50px);
`;

export const WordFieldStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const WordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteWordIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.iconsSecondary};
  cursor: pointer;
`;

export const AddWordIcon = styled(Icon)<{ disabled: boolean }>`
  margin-left: ${({ theme }) => theme.space[2]}px;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.iconsDisabled : theme.colors.iconsPrimary)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const FormBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 512px;
`;
