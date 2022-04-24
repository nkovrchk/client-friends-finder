import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'hooks';
import { VKApi } from 'net/api/vk';
import { Form } from 'pages/FormPage/Form';
import { IFormData } from 'pages/FormPage/Form/types';
import { ROUTES } from 'routes/consts';
import { useGraphStore } from 'store/graph';
import { Button } from 'ui/Button';
import { Spinner } from 'ui/Spinner';

import { AuthApi } from '../../net/api/auth';
import { FormPageStyled } from './styled';

export const FormPage: React.FC = () => {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const { setGraph } = useGraphStore();

  const getUser = useCallback(
    (formData: IFormData) => {
      setIsPending(true);
      VKApi.getGraph(formData).then((result) => {
        setGraph({ root: result });
        history.push(ROUTES.GRAPH.PATH);
      });
    },
    [history, setGraph],
  );

  const logout = useCallback(() => {
    AuthApi.logout();
  }, []);

  useAuth();

  return (
    <FormPageStyled>
      <Button onClick={logout}>выйти</Button>
      {isPending ? <Spinner /> : <Form onSubmit={getUser} />}
    </FormPageStyled>
  );
};
