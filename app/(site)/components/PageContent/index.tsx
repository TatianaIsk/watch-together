'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import { motion, useInView } from 'framer-motion';

import Image from 'next/image';

import image from './../../../../assets/image-pagecontent.svg';
import imageItem from './../../../../assets/image-items.png';

import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ContentItems from '../ContentItems';

const PageContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const router = useRouter();
  const constraintsRef = useRef(null);

  const generateRandomRoomNumber = (): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const roomNumberLength = 6;

    return Array.from({ length: roomNumberLength }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  };

  const handleClick = () => {
    const roomId = generateRandomRoomNumber();
    router.push(`/room/${roomId}`);
  };

  return (
    <>
      <div className='grid grid-cols-2 pt-10 pl-8 pr-8'>
        <div className='flex flex-col justify-center ml-[150px]'>
          <h1 className='text-white font-montserrat text-5xl font-normal leading-[70px] tracking-wider'>
            Смотрите видео с<br /> друзьями и близкими на расстоянии
          </h1>
          <Button onClick={handleClick} className='w-[275px] flex bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#281759] mt-7 items-center justify-between px-4 py-2'>
            Смотреть вместе
            <Icon name='cateye' />
          </Button>
        </div>
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 5, x: 0 }} className='sm:w-1/2 lg:w-full' ref={constraintsRef} drag dragConstraints={constraintsRef}>
          <Image alt='image' src={image} className='w-full h-auto' sizes='(max-width: 768px) 100vw' />
        </motion.div>
      </div>
      <motion.div className='grid grid-cols-2 items-center pr-[80px] pl-8 pb-6'  initial='hidden' animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <div className='ml-[150px]'>
          <Image alt='image' src={imageItem} className=' h-auto' sizes='(max-width: 768px) 100vw' />
        </div>
        <div className='flex flex-col'>
          <ContentItems />
        </div>
      </motion.div>
    </>
  );
};

export default PageContent;
