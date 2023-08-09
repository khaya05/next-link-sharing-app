'use client';

import { useAppSelector } from '@/store/store';
import LinkInput from './LinkInput';

const RenderLinks = () => {
  const links = useAppSelector((state) => state.user.links);

  return (
    <>
      {links.map((link, index) => {
        return <LinkInput key={index} />;
      })}
    </>
  );
};

export default RenderLinks;
