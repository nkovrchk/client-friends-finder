import React, { useCallback } from 'react';

import { Text } from 'ui/Text';

import { LoginPageStyled, LoginFormStyled, VKButton } from './styled';

export const LoginPage: React.FC = () => {
  const redirect = useCallback(() => {
    window.open('/auth/login', '_self', 'noopener, noreferrer');
  }, []);

  return (
    <LoginPageStyled>
      <LoginFormStyled>
        <Text $center $variant="h3SemiBold" pb={6}>
          Авторизация
        </Text>
        <VKButton onClick={redirect}>Войти через VK</VKButton>
      </LoginFormStyled>
    </LoginPageStyled>
  );
};
