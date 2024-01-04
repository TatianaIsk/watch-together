'use client';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { PropsWithChildren } from 'react';
import Input from '@/components/ui/Input';

interface VideoFormProps extends PropsWithChildren {
  className?: string;
}

const VideoForm: React.FC<VideoFormProps> = ({ className }) => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
  };

  return (
    <div className='flex flex-row items-start justify-start py-[75px] px-[50px]'>
      <ReactPlayer url={videoUrl} controls width='1400px' height='380px' className='mr-4' />
      <Input type='text' value={videoUrl} onChange={handleInputChange} placeholder='Введите название или ссылку...' className='m-0 bg-[#160B29]'/>
    </div>
  );
};

export default VideoForm;
