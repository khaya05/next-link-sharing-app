'use client';

import { useAppSelector } from '@/store/store';
import LinkInput from './LinkInput';

const RenderLinks = () => {
  const links = useAppSelector((state) => state.user.links);
  console.log(links)

  return (
    <>
      {links.map((link, index) => {
        return <LinkInput key={link.id} id={link.id} no={index + 1 } />;
      })}
    </>
  );
};

export default RenderLinks;
