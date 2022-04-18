import React, { useCallback, useState } from 'react';

import { Notification } from 'components/Notification';
import { NotificationContext } from 'context';
import { ENotificationType } from 'enums';

export const NotificationProvider: React.FC = ({ children }) => {
  const [type, setType] = useState<ENotificationType | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendNotification = useCallback((type: ENotificationType, message: string) => {
    setType(type);
    setMessage(message);

    setTimeout(() => {
      setType(null);
      setMessage(null);
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={sendNotification}>
      {type && message ? <Notification type={type} message={message} /> : null}
      {children}
    </NotificationContext.Provider>
  );
};
