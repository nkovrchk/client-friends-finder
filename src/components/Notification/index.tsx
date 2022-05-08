import React, { useMemo } from 'react';

import { ENotificationType } from 'enums';
import { Success24M, Warning24M, Error24M } from 'static/icons';
import { Icon } from 'ui/Icon';
import { Text } from 'ui/Text';

import { NotificationContainerStyled, NotificationStyled } from './styled';

interface INotificationProps {
  type: ENotificationType;
  message: string;
}

export const Notification: React.FC<INotificationProps> = ({ type, message }) => {
  const renderIcon = useMemo(() => {
    switch (type) {
      case ENotificationType.ERROR:
        return (
          <Icon mr={1} color="systemError">
            <Error24M />
          </Icon>
        );
      case ENotificationType.WARNING:
        return (
          <Icon mr={1} color="systemWarning">
            <Warning24M />
          </Icon>
        );
      case ENotificationType.SUCCESS:
        return (
          <Icon mr={1} color="systemSuccess">
            <Success24M />
          </Icon>
        );
    }
  }, [type]);

  return (
    <NotificationContainerStyled>
      <NotificationStyled>
        {renderIcon}
        <Text $variant="caption1SemiBold" $color="simpleWhite">
          {message}
        </Text>
      </NotificationStyled>
    </NotificationContainerStyled>
  );
};
