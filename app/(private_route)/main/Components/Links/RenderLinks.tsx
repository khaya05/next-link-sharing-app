'use client';

import { useAppSelector } from '@/store/store';
import LinkInput from './LinkInput';
import { DroppableProvided, Draggable } from 'react-beautiful-dnd';

const RenderLinks= () => {
  const links = useAppSelector((state) => state.user.links);

  return (
    <>
      {links.map((link, index) => (
        <Draggable key={link.id} draggableId={index.toString()} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <LinkInput id={link.id} no={index + 1} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default RenderLinks;
