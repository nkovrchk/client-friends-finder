import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'context';
import { ROUTES } from 'routes/consts';
import { Text } from 'ui/Text';

import { LoginPageStyled, LoginFormStyled, VKButton } from './styled';

const LoginPage: React.FC = () => {
  const history = useHistory();

  const { isAuthed } = useAuth();
  const redirect = useCallback(() => {
    window.open('/auth/login', '_self', 'noopener, noreferrer');
  }, []);

  useEffect(() => {
    if (isAuthed) history.push(ROUTES.FORM.PATH);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthed]);

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

export default LoginPage;
