import React from 'react';

import { FullWidthContainer } from 'styled';
import { Text } from 'ui/Text';

import { AboutStyled } from './styled';

export const About: React.FC = () => (
  <FullWidthContainer id="about">
    <AboutStyled id="about">
      <Text $variant="h3SemiBold" pt={8} pb={4}>
        О приложении
      </Text>
      <Text $variant="body1Regular" mb={4}>
        FriendsFinder - это приложение, ориентированное на поиск единомышленников, людей со схожими интересами и
        увлечениями. FriendsFinder поможет познакомиться с любителями котиков или фанатом компьютерных всего за пару
        минут. Ищи, узнавай, дружи и получай удовольствие.
      </Text>
    </AboutStyled>
  </FullWidthContainer>
);
