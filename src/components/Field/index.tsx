import React from 'react';

import { Text } from 'ui/Text';

import { FieldStyled, LabelStyled } from './styled';

interface IFieldProps {
  id: string;
  label: string;
}

export const Field: React.FC<IFieldProps> = ({ id, label, children }) => {
  return (
    <FieldStyled>
      <LabelStyled htmlFor={id}>
        <Text $color="textSecondary">{label}</Text>
      </LabelStyled>
      {children}
    </FieldStyled>
  );
};
