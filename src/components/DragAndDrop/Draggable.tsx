import React from 'react';

import { Burger24M } from 'static/icons';
import { Icon } from 'ui/Icon';

import { DraggableStyled, DraggableContent } from './styled';
import { IDraggable } from './types';

export const Draggable: React.FC<IDraggable> = ({ children }) => {
  return (
    <DraggableStyled>
      <Icon color="iconsSecondary" mr={4}>
        <Burger24M />
      </Icon>
      <DraggableContent>{children}</DraggableContent>
    </DraggableStyled>
  );
};
