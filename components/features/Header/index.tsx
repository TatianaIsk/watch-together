import clsx from 'clsx';

import iconHeader from './../../../assets/icons/icon-header.svg';

import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div className={clsx(`h-[100px] bg-gradient-to-b from-[#0C0A22] to-[#1D0E48] p-9 flex items-center`, className)}>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-start items-center gap-x-4'>
          <Image alt='header' src={iconHeader} className='absolute top-0' sizes="(max-width: 768px) 100vw"/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Header;
