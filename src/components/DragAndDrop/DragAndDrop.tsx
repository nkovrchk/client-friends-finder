import React from 'react';
import { DragDropContext, Draggable as DraggableBox, Droppable } from 'react-beautiful-dnd';

import { IDragAndDrop } from './types';

export const DragAndDrop: React.FC<IDragAndDrop> = ({ id, onDragEnd, children }) => {
  React.Children.forEach(children, (element) => {
    if (!React.isValidElement(element)) return;
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {React.Children.map(children, (element, index) => {
              if (!React.isValidElement(element)) return;

              const { id } = element.props;

              return (
                <DraggableBox draggableId={String(id)} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ margin: '8px 0', ...provided.draggableProps.style }}
                    >
                      {element}
                    </div>
                  )}
                </DraggableBox>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
