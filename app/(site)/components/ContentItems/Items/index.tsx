import { PropsWithChildren } from 'react';
import Icon from '@/components/ui/Icon';
import { ItemType } from '../../types';

type ItemsProps = PropsWithChildren<ItemType>;

const Items: React.FC<ItemsProps> = ({ icon, children }) => {
  return (
    <div className='flex items-center bg-[#1E1241] mb-6 p-3 rounded-[8px]'>
      <Icon name={icon} className='mr-5' />
      <p className='text-[20px]'>{children}</p>
    </div>
  );
};

export default Items;
