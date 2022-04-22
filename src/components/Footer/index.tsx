import React from 'react';

import { Text } from 'ui/Text';

import { FooterStyled } from './styled';

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Text $variant="caption2SemiBold" $color="textTertiary">
        Оверчук Никита Викторович 2022г.
      </Text>
    </FooterStyled>
  );
};
