import React from 'react';

import { LOGIN_URL } from './consts';

export const MainPage: React.FC = () => {
  return (
    <div>
      <a href={LOGIN_URL}>Войти через VK</a>
      <div>Авторизоваться</div>
    </div>
  );
};
