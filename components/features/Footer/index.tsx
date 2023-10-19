import Icon from '@/components/ui/Icon';

const Footer = () => {
  return (
    <div className='flex justify-end items-center h-auto bg-gradient-to-b from-[#1D0E48] to-[#0C0A22] p-9'>
      <Icon name='github' className='mr-5'/>
      <Icon name='telegram' />
    </div>
  );
};

export default Footer;
