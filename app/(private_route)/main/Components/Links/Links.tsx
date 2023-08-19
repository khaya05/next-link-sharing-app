'use client';

import Heading from '../shared/Heading';
import GetStarted from './GetStarted';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { MouseEventHandler, useMemo } from 'react';
import RenderLinks from './RenderLinks';
import { addLink } from '@/store/user-data-slice';
import { Droppable } from 'react-beautiful-dnd';
import { nanoid } from 'nanoid';

function Links() {
  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.user.links);
  const hasLinks = useMemo(() => links.length !== 0, [links]);

  const addNewLink: MouseEventHandler<HTMLButtonElement> = () => {
    const newLinkForm = {
      id: nanoid(),
      link: '',
      platform: '',
    };
    dispatch(addLink(newLinkForm));
  };

  console.log(links);

  return (
    <div className="md:p-10">
      <Heading
        title="Customize your links"
        legend="Add/edit/remove links below and then share all your profiles with the world!"
      />
      <button
        onClick={addNewLink}
        type="button"
        className="
          w-full
          text-purple
          ring-[1px]
          ring-purple
          h-[2.874rem]
          rounded-[8px]
          font-[600]
          text-base
          md:mt-10
          md:mb-6
          hover:bg-light-purple
          hover:cursor-pointer
          "
      >
        + Add new link
      </button>
      <div className="md:h-[31rem]">
        {hasLinks ? (
          <Droppable droppableId="links">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <RenderLinks />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : (
          <GetStarted />
        )}
      </div>
    </div>
  );
}

export default Links;
