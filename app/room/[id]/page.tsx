'use client';
import { useRouter, useParams } from 'next/navigation';

import Header from '@/components/features/Header';

const Room = () => {
  const router = useRouter();
  const { roomId } = useParams();

  return (
    <div className='bg-[#281759] h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      {roomId}
    </div>
  );
};

export default Room;
