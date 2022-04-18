import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { NotificationContext } from 'context';
import { ENotificationType } from 'enums';
import { http } from 'net/http';
import { ROUTES } from 'routes/consts';

export const HttpInterceptor: React.FC = ({ children }) => {
  const sendNotification = useContext(NotificationContext);
  const history = useHistory();

  useEffect(() => {
    http.interceptors.response.use(undefined, (error) => {
      const statusCode = error.response.status;

      if (statusCode === 401) {
        sendNotification(ENotificationType.ERROR, 'Вы не авторизованы.');
        history.push(ROUTES.LOGIN.PATH);
      }
      throw new Error(error);
    });

    http.interceptors.response.use(undefined, (error) => {
      const statusCode = error.response.status;

      if (statusCode === 500) {
        sendNotification(ENotificationType.ERROR, 'Произошла внутренняя ошибка.');
      }
      throw new Error(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};
