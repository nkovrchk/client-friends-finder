import React from 'react';
import { DropResult, ResponderProvided } from 'react-beautiful-dnd';

export interface IDraggable {
  id: string | number;
}

export interface IDragAndDrop {
  id: string;
  onDragEnd: (result: DropResult, provided: ResponderProvided) => void;
  children: Array<React.ReactElement<IDraggable>>;
}
