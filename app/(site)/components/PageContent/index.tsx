import Button from '@/components/ui/Button';

import image from './../../../../assets/image-pagecontent.svg';
import icon from './../../../../assets/icon-button.svg';
import imageItem from './../../../../assets/image-items.png';

import Image from 'next/image';

const PageContent = () => {
  return (
    <>
      <div className='grid grid-cols-2 pt-10 pl-8 pr-8'>
        <div className='flex flex-col justify-center ml-[150px]'>
          <h1 className='text-white font-montserrat text-4xl font-normal leading-[70px] tracking-wider'>
            Смотрите видео с<br /> друзьями и близкими на
            <br /> расстоянии
          </h1>
          <Button className='w-[275px] flex bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#281759] mt-7 items-center justify-between px-4 py-2'>
            Смотреть вместе
            <Image alt='icon' src={icon} />
          </Button>
        </div>
        <div className='sm:w-1/2 lg:w-full'>
          <Image alt='image' src={image} className='w-full h-auto' />
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='ml-[150px]'>
          <Image alt='image' src={imageItem} className=' h-auto' />
        </div>
        <div className='flex'>
          
        </div>
      </div>
    </>
  );
};

export default PageContent;
