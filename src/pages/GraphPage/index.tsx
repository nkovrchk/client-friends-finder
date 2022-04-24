import React from 'react';

import { ProfileCard } from './components/ProfileCard';
import { Tree } from './components/Tree';
import { useGraphPage } from './hooks';
import { GraphPageStyled } from './styled';

export const GraphPage: React.FC = () => {
  const { root, handleNodeClick, friend } = useGraphPage();

  return (
    <GraphPageStyled>
      {friend ? <ProfileCard {...friend} /> : null}
      {root ? <Tree root={root} onNodeClick={handleNodeClick} /> : null}
    </GraphPageStyled>
  );
};
