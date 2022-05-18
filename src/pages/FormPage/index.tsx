import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { VKApi } from 'net/api/vk';
import { ROUTES } from 'routes/consts';
import { useGraphStore } from 'store/graph';
import { Spinner } from 'ui/Spinner';

import { Form } from './components/Form';
import { IFormData } from './components/Form/types';
import { FormPageStyled } from './styled';

const FormPage: React.FC = () => {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const { setGraph } = useGraphStore();

  const getGraph = useCallback(
    ({ depth, width, keyWords }: IFormData) => {
      setIsPending(true);
      VKApi.getGraph({ depth, width, keyWords }).then((result) => {
        setGraph({ root: result });
        history.push(ROUTES.GRAPH.PATH);
      });
    },
    [history, setGraph],
  );

  if (isPending) return <Spinner />;

  return (
    <FormPageStyled>
      <Form onSubmit={getGraph} />
    </FormPageStyled>
  );
};

export default FormPage;
