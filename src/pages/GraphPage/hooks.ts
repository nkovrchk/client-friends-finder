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
      const { matched, info, wall, groups, photo } = data.attributes;

      setFriend({ name, imageUrl: photo, id, matched, info, wall, groups });
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
