import React, { useCallback } from 'react';
import Tree from 'react-d3-tree';

import { useCenteredTree } from 'hooks';
import { ITreeNode } from 'types';

import { TreeStyled, TreeWrapper } from './styled';

interface ITreeProps {
  root: ITreeNode;
}

export const TreeComponent: React.FC<ITreeProps> = ({ root }) => {
  const [translate, containerRef] = useCenteredTree();

  const renderNode = useCallback(({ nodeDatum, onNodeClick }) => {
    const name = nodeDatum.name;
    const id = nodeDatum.attributes.id;
    const photo = nodeDatum.attributes.photo;

    return (
      <g>
        <defs>
          <pattern id={id} x="0%" y="0%" height="100%" width="100%" viewBox="0 0 32 32">
            <image xlinkHref={photo} width="32" height="32" x="0%" y="0%" />
          </pattern>
        </defs>
        <circle fill={`url(#${id})`} r="32" stroke="#939393" onClick={onNodeClick} />
        <text fill="black" strokeWidth="1" x="40">
          {name}
        </text>
      </g>
    );
  }, []);

  return (
    <TreeWrapper>
      <TreeStyled ref={containerRef}>
        <Tree
          data={root}
          translate={translate}
          svgClassName="friends-finder-tree"
          orientation="vertical"
          onNodeClick={() => alert('clicked')}
          collapsible={false}
          renderCustomNodeElement={renderNode}
        />
      </TreeStyled>
    </TreeWrapper>
  );
};

const TreeMemo = React.memo(TreeComponent);

export { TreeMemo as Tree };
