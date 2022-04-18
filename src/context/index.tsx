import React from 'react';

import { ENotificationType } from 'enums';

export const NotificationContext = React.createContext((type: ENotificationType, message: string) => {});
