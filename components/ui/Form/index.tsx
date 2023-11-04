import clsx from 'clsx';
import Image from 'next/image';

import image from './../../../assets/image-items.png';
import { PropsWithChildren } from 'react';

interface FormProps extends PropsWithChildren {
  title: string;
  className?: string;
}

const Form: React.FC<FormProps> = ({ title, className, children }) => {
  return (
    <form className={clsx('bg-[#1E1241] grid grid-cols-2 items-center rounded-[10px] my-24 py-[50px] px-[40px]', className)}>
      <div className='mx-auto'>
        <Image alt='image' src={image} className='w-[420px]' sizes="(max-width: 768px) 100vw"/>
      </div>
      <div className='flex flex-col'>
        <div className='text-white font-montserrat text-3xl font-normal leading-normal tracking-widest'>{title}</div>
        {children}
      </div>
    </form>
  );
};

export default Form;
