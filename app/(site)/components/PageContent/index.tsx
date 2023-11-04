import Image from 'next/image';

import image from './../../../../assets/image-pagecontent.svg';
import imageItem from './../../../../assets/image-items.png';

import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ContentItems from '../ContentItems';

const PageContent = () => {
  return (
    <>
      <div className='grid grid-cols-2 pt-10 pl-8 pr-8'>
        <div className='flex flex-col justify-center ml-[150px]'>
          <h1 className='text-white font-montserrat text-5xl font-normal leading-[70px] tracking-wider'>
            Смотрите видео с<br /> друзьями и близкими на расстоянии
          </h1>
          <Button className='w-[275px] flex bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#281759] mt-7 items-center justify-between px-4 py-2'>
            Смотреть вместе
            <Icon name='cateye' />
          </Button>
        </div>
        <div className='sm:w-1/2 lg:w-full'>
          <Image alt='image' src={image} className='w-full h-auto' sizes="(max-width: 768px) 100vw"/>
        </div>
      </div>
      <div className='grid grid-cols-2 items-center pr-[80px] pl-8 pb-6'>
        <div className='ml-[150px]'>
          <Image alt='image' src={imageItem} className=' h-auto' sizes="(max-width: 768px) 100vw"/>
        </div>
        <div className='flex flex-col'>
          <ContentItems />
        </div>
      </div>
    </>
  );
};

export default PageContent;
