import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { graphAtom } from './atom';
import { IGraphAtom } from './types';

export const useGraphStore = () => {
  const [graph, setGraph] = useRecoilState(graphAtom);

  const _setGraph = useCallback(
    (value: Partial<IGraphAtom>) => {
      setGraph((prevState) => ({ ...prevState, ...value }));
    },
    [setGraph],
  );

  return {
    graph,
    setGraph: _setGraph,
  };
};
