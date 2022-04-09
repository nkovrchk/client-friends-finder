import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'ui/Button';

export const MainPage: React.FC = () => {
  const history = useHistory();

  const toLoginPage = useCallback(() => {
    history.push('/login');
  }, [history]);

  return (
    <div>
      <Button onClick={toLoginPage}>Авторизоваться</Button>
    </div>
  );
};
