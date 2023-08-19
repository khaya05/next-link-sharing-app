'use client';

import React, { FormEvent, useMemo } from 'react';
import Links from '../Links/Links';
import { useAppSelector, useAppDispatch } from '@/store/store';
import SaveButton from '../shared/SaveButton';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { updateLinks } from '@/store/user-data-slice';
import Profile from '../Profile/Profile';
import axios from 'axios';

const Main = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const currentPage = useAppSelector((state) => state.ui.currentPage);
  const links = useAppSelector((state) => state.user.links);

  // exclude id
  const newLinks = useMemo(() => {
    return links.map(({ link, platform }) => {
      return { link, platform };
    });
  }, [links]);

  const handleSubmitLinks = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  const handleSubmitProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('profile data submited');
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newLinks = Array.from(links);
    const [reorderedLinks] = newLinks.splice(result.source.index, 1);
    newLinks.splice(result.destination.index, 0, reorderedLinks);

    dispatch(updateLinks(newLinks));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div
        className="
        bg-white
        h-full
        w-full
        rounded-[12px]
    "
      >
        <div className="h-[88.6%]">
          {currentPage === 'LINKS' ? (
            <form
              id="links-form"
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmitLinks(e)}
            >
              <Links />
            </form>
          ) : (
            <form
              id="profile-form"
              onSubmit={(e: FormEvent<HTMLFormElement>) =>
                handleSubmitProfile(e)
              }
            >
              <Profile />
            </form>
          )}
        </div>

        <div className="h-[5.875rem] border-t-[2px] border-t-lines">
          <SaveButton />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Main;
