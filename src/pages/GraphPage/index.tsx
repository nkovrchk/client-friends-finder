import React from 'react';

import { Button } from 'ui/Button';

import { ProfileCard } from './components/ProfileCard';
import { Tree } from './components/Tree';
import { useGraphPage } from './hooks';
import { GraphPageStyled, GraphPageFooter } from './styled';

const GraphPage: React.FC = () => {
  const { root, handleNodeClick, friend, toFormPage } = useGraphPage();

  return (
    <GraphPageStyled>
      {friend ? <ProfileCard {...friend} /> : null}
      {root ? <Tree root={root} onNodeClick={handleNodeClick} /> : null}
      <GraphPageFooter>
        <Button $type="secondary" onClick={toFormPage}>
          Назад к параметрам
        </Button>
      </GraphPageFooter>
    </GraphPageStyled>
  );
};

export default GraphPage;
