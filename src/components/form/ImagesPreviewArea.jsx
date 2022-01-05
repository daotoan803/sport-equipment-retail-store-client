import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ImagesPreviewArea = ({ images, reorder = function () {} }) => {
  const onDragEndHandle = (e) => {
    console.log(e);
    if (!e.destination) {
      return;
    }
    reorder(e.source.index, e.destination.index);
  };
  console.log(images);
  return (
    <DragDropContext onDragEnd={onDragEndHandle}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex overflow-auto gap-4 w-full h-48 border border-black">
            {images.map((image, index) => (
              <Draggable
                key={image.name}
                draggableId={image.name}
                index={index}>
                {(provided, snapshot) => (
                  <img
                    src={image.url}
                    alt={image.name}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-auto"
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImagesPreviewArea;
