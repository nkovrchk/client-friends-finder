import React, { useCallback } from 'react';
import Tree from 'react-d3-tree';

import { ITreeNode } from 'types';

import { useCenteredTree } from './hooks';
import { TreeStyled } from './styled';

interface ITreeProps {
  tree: ITreeNode;
  onNodeClick: (node: ITreeNode) => void;
}

export const TreeComponent: React.FC<ITreeProps> = ({ tree, onNodeClick }) => {
  const [translate, containerRef] = useCenteredTree();

  const renderNode = useCallback((nodeDatum, handleNodeClick) => {
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
        <circle fill={`url(#${id})`} r="32" stroke="#939393" onClick={() => handleNodeClick(nodeDatum)} />
        <text fill="black" strokeWidth="1" x="40">
          {name}
        </text>
      </g>
    );
  }, []);

  return (
    <TreeStyled ref={containerRef}>
      <Tree
        data={tree}
        translate={translate}
        renderCustomNodeElement={(rd3Props) => renderNode(rd3Props.nodeDatum, onNodeClick)}
        orientation="vertical"
      />
    </TreeStyled>
  );
};
