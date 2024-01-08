'use client';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { PropsWithChildren } from 'react';
import Input from '@/components/ui/Input';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import player from '@/assets/image-player.svg';
import clsx from 'clsx';

interface VideoFormProps extends PropsWithChildren {
  className?: string;
}

const VideoForm: React.FC<VideoFormProps> = ({ className }) => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
  };

  return (
    <div className={clsx(`flex flex-row items-start justify-start pt-[75px] px-[50px] pb-[57px]`, className)}>
      {videoUrl ? (
        <ReactPlayer url={videoUrl} controls width='1400px' height='380px' className='mr-4 rounded-[10px]' />
      ) : (
        <div className='w-[1400px] h-[380px] mr-4 bg-[#1E1241] rounded-[10px] flex justify-center items-center text-[16px]'>
          <Image src={player} alt='кот' width={110} height={110} /> <p>Здесь будет ваш фильм</p>
        </div>
      )}
      <Input type='text' value={videoUrl} onChange={handleInputChange} placeholder='Введите название или ссылку...' />
      {videoUrl ? <Icon name='cateyeBlack' className='absolute right-[65px] mt-2' /> : <Icon name='eyeclose' className='absolute right-[65px] mt-5' />}
    </div>
  );
};

export default VideoForm;
