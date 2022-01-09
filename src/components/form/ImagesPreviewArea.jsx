import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ImagesPreviewArea = ({ images, reorder, onDbClick }) => {
  const onDragEndHandle = (e) => {
    if (!e.destination) {
      return;
    }
    reorder(e.source.index, e.destination.index);
  };

  const handleImageClick = (e) => {
    if (e.detail === 2) {
      onDbClick(e);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandle}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex overflow-auto gap-2 lg:gap-6 w-full h-32 lg:h-40 border border-black rounded-2xl">
            {images.map((image, index) => (
              <Draggable
                key={image.name}
                draggableId={image.name}
                index={index}>
                {(provided, snapshot) => (
                  <img
                    onClick={handleImageClick}
                    src={image.url}
                    alt={image.name}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="h-full w-auto"></img>
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
