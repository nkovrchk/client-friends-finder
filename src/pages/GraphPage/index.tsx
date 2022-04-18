import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Form } from 'components/Form';
import { IFormData } from 'components/Form/types';
import { NotificationContext } from 'context';
import { ENotificationType } from 'enums';
import { AuthApi } from 'net/api/auth';
import { VKApi } from 'net/api/vk';
import { ITreeNode } from 'types';
import { Spinner } from 'ui/Spinner';

import { TreeComponent } from './components/Tree';
import { VKPageStyled } from './styled';

export const GraphPage: React.FC = () => {
  const [tree, setTree] = useState<ITreeNode | null>(null);
  const [isPending, setIsPending] = useState(false);

  const sendNotification = useContext(NotificationContext);

  const getUser = useCallback((formData: IFormData) => {
    setIsPending(true);
    VKApi.getGraph(formData)
      .then((result) => {
        setTree(result);
      })
      .finally(() => setIsPending(false));
  }, []);

  useEffect(() => {
    AuthApi.checkToken().then(({ isAuthed }) => {
      if (!isAuthed) {
        sendNotification(ENotificationType.ERROR, 'Вы не авторизованы.');
      } else {
        sendNotification(ENotificationType.SUCCESS, 'Вы авторизованы.');
      }
    });
  }, [sendNotification]);

  return (
    <VKPageStyled>
      {isPending ? <Spinner /> : <Form onSubmit={getUser} />}
      {tree ? <TreeComponent tree={tree} onNodeClick={() => {}} /> : null}
    </VKPageStyled>
  );
};
