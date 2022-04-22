import React from 'react';

import { useAuth } from 'hooks';
import { useGraphStore } from 'store/graph';

import { Tree } from './components/Tree';
import { GraphPageStyled } from './styled';

export const GraphPage: React.FC = () => {
  const {
    graph: { root },
  } = useGraphStore();

  useAuth();

  return <GraphPageStyled>{root ? <Tree root={root} /> : null}</GraphPageStyled>;
};
