import React, { useCallback, useState } from 'react';

import { Form } from 'components/Form';
import { IFormData } from 'components/Form/types';
import { VKApi } from 'net/api/vk';
import { ITreeNode } from 'types';
import { Spinner } from 'ui/Spinner';

import { TreeComponent } from './components/Tree';
import { VKPageStyled } from './styled';

export const VKPage: React.FC = () => {
  const [tree, setTree] = useState<ITreeNode | null>(null);
  const [isPending, setIsPending] = useState(false);

  const getUser = useCallback((formData: IFormData) => {
    setIsPending(true);
    VKApi.getGraph(formData)
      .then((result) => {
        setTree(result);
      })
      .finally(() => setIsPending(false));
  }, []);

  return (
    <VKPageStyled>
      {isPending ? <Spinner /> : <Form onSubmit={getUser} />}
      {tree ? <TreeComponent tree={tree} onNodeClick={() => {}} /> : null}
    </VKPageStyled>
  );
};
