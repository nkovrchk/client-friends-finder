import React, { useCallback } from 'react';
import Tree from 'react-d3-tree';
import { TreeNodeEventCallback } from 'react-d3-tree/lib/Tree/types';
import { PathClassFunction } from 'react-d3-tree/lib/types/common';

import { useCenteredTree } from 'hooks';
import { ITreeNode } from 'types';

import { TreeStyled, TreeWrapper } from './styled';

interface ITreeProps {
  root: ITreeNode;
  onNodeClick: (data: any) => void;
}

export const TreeComponent: React.FC<ITreeProps> = ({ root, onNodeClick }) => {
  const [translate, containerRef] = useCenteredTree();

  const getLinkClass: PathClassFunction = useCallback(({ target }) => {
    if (!target.data.attributes?.linked) return 'linked-path';

    return 'not-linked-path';
  }, []);

  const handleNodeClick: TreeNodeEventCallback = useCallback(
    ({ data }) => {
      onNodeClick(data);
    },
    [onNodeClick],
  );

  const renderNode = useCallback(({ nodeDatum, onNodeClick }) => {
    const id = nodeDatum.attributes.id;
    const photo = nodeDatum.attributes.photo;

    return (
      <g>
        <defs>
          <pattern id={id} x="0%" y="0%" height="100%" width="100%" viewBox="0 0 32 32">
            <image xlinkHref={photo} width="32" height="32" x="0%" y="0%" />
          </pattern>
        </defs>
        <circle fill={`url(#${id})`} r="32" stroke="#d3d3d3" onClick={onNodeClick} />
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
          onNodeClick={handleNodeClick}
          collapsible={false}
          renderCustomNodeElement={renderNode}
          pathClassFunc={getLinkClass}
        />
      </TreeStyled>
    </TreeWrapper>
  );
};

const TreeMemo = React.memo(TreeComponent);

export { TreeMemo as Tree };
