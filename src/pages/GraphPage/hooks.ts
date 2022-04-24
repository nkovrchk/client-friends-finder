import { useCallback } from 'react';

import { useAuth } from 'hooks';
import { useGraphStore } from 'store/graph';
import { ITreeNode } from 'types';

export const useGraphPage = () => {
  const {
    graph: { root },
    setFriend,
    friend,
  } = useGraphStore();

  const handleNodeClick = useCallback(
    (data: ITreeNode) => {
      const id = Number(data.attributes.id);
      const name = data.name;
      const imageUrl = data.attributes.photo;

      setFriend({ name, imageUrl, id });
    },
    [setFriend],
  );

  useAuth();

  return {
    root,
    handleNodeClick,
    friend,
  };
};
