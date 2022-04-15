import React, { useCallback } from 'react';

import { Button } from 'ui/Button';
import { Text } from 'ui/Text';

import { LoginPageStyled, LoginFormStyled } from './styled';

export const LoginPage: React.FC = () => {
  const redirect = useCallback(() => {
    window.open('/auth/login', '_self', 'noopener, noreferrer');
  }, []);

  return (
    <LoginPageStyled>
      <LoginFormStyled>
        <Text $variant="h3SemiBold" pb={6}>
          Авторизоваться
        </Text>
        <Button onClick={redirect} $type="primary" $size="s">
          Войти
        </Button>
      </LoginFormStyled>
    </LoginPageStyled>
  );
};
