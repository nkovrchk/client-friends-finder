import React from 'react';

import { Burger24M } from 'icons/Burger';
import { Box } from 'ui/Box';
import { Icon } from 'ui/Icon';

import { DraggableStyled, DraggableContent } from './styled';
import { IDraggable } from './types';

export const Draggable: React.FC<IDraggable> = ({ children }) => {
  return (
    <DraggableStyled>
      <Box>
        <Icon color="iconsSecondary">
          <Burger24M />
        </Icon>
      </Box>
      <DraggableContent>{children}</DraggableContent>
    </DraggableStyled>
  );
};
