import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from 'routes/consts';
import { useGraphStore } from 'store/graph';
import { ITreeNode } from 'types';

export const useGraphPage = () => {
  const {
    graph: { root },
    setFriend,
    friend,
  } = useGraphStore();

  const history = useHistory();

  const handleNodeClick = useCallback(
    (data: ITreeNode) => {
      const id = Number(data.attributes.id);
      const name = data.name;
      const { matched, info, wall, groups, photo } = data.attributes;

      setFriend({ name, imageUrl: photo, id, matched, info, wall, groups });
    },
    [setFriend],
  );

  const toFormPage = useCallback(() => {
    history.push(ROUTES.FORM.PATH);
  }, [history]);

  useEffect(
    () => () => setFriend(null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    root,
    handleNodeClick,
    friend,
    toFormPage,
  };
};
