import Icon from '@/components/ui/Icon';
import { ItemType } from '..';

type ItemsProps = ItemType;

const Items: React.FC<ItemsProps> = ({ icon, text }) => {
  return (
    <div className='flex items-center bg-[#1E1241] mb-6 p-3 rounded-[8px]'>
      <Icon name={icon} className='mr-5' />
      <p className='text-[20px]'>{text}</p>
    </div>
  );
};

export default Items;
