'use client'
import clsx from 'clsx';
import { motion } from 'framer-motion';

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
        <motion.div
          className='flex flex-start items-center gap-x-4'
          initial={{ x: -10, rotate: -10, scale: 1, opacity: 1 }}
          animate={{ x: 20, rotate: 5, scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image alt='header' src={iconHeader} className='mt-8' sizes='(max-width: 768px) 100vw' />
        </motion.div>
        {children}
      </div>
    </div>
  );
};

export default Header;
