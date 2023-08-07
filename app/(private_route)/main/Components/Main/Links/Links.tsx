'use client';

import Heading from '../shared/Heading';
import GetStarted from './GetStarted';

function Links() {
  return (
    <div className="md:p-10">
      <Heading
        title="Customize your links"
        legend="Add/edit/remove links below and then share all your profiles with the world!"
      />
      <button
        type='button'
        className='
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
          '
      >
        + Add new link
      </button>
      <div>
      <GetStarted />

      </div>
    </div>
  );
}

export default Links;
