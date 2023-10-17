import clsx from 'clsx';

import iconHeader from './../../../assets/icons/icon-header.svg';

import Image from 'next/image';
import Button from '@/components/ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={clsx(`h-[100px] bg-gradient-to-b from-[#0C0A22] to-[#1D0E48] p-9 flex items-center`, className)}>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-start items-center gap-x-4'>
          <Image alt='header' src={iconHeader} className='absolute top-0' />
        </div>
        <div className='flex flex-end items-center gap-x-8'>
          <Button className='border-[#E0E29E] border-2'>Войти</Button>
          <Button className='bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#0C0A22]'>Зарегистрироваться</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
