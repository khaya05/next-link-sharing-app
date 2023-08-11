'use client';

import Heading from '../shared/Heading';
import GetStarted from './GetStarted';
import LinkInput from './LinkInput';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { MouseEventHandler, useMemo } from 'react';
import RenderLinks from './RenderLinks';
import { addLink } from '@/store/user-data-slice';
import {nanoid} from 'nanoid'

function Links() {
  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.user.links);
  const platform = useAppSelector(state => state.link.platform);

  const hasLinks = useMemo(() => links.length !== 0, [links]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    const newLinkForm = {
      id: nanoid(),
      link: '',
      platform: '',
    };
    dispatch(addLink(newLinkForm));
  };

  return (
    <div className="md:p-10">
      <Heading
        title="Customize your links"
        legend="Add/edit/remove links below and then share all your profiles with the world!"
      />
      <button
        onClick={handleClick}
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
        {hasLinks ? <RenderLinks /> : <GetStarted />}
      </div>
    </div>
  );
}

export default Links;
