import { useCallback, useContext, useEffect, useState } from 'react';
import { Point } from 'react-d3-tree/lib/types/common';

import { NotificationContext } from './context';
import { ENotificationType } from './enums';
import { AuthApi } from './net/api/auth';

export const useAuth = () => {
  const sendNotification = useContext(NotificationContext);

  useEffect(() => {
    AuthApi.checkToken().then(({ isAuthed }) => {
      if (!isAuthed) {
        sendNotification(ENotificationType.ERROR, 'Вы не авторизованы.');
      } else {
        sendNotification(ENotificationType.SUCCESS, 'Вы авторизованы.');
      }
    });
  }, [sendNotification]);
};

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }): [Point, (elem: HTMLDivElement) => void] => {
  const [translate, setTranslate] = useState<Point>(defaultTranslate);

  const containerRef = useCallback((containerElem: HTMLDivElement) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);

  return [translate, containerRef];
};
