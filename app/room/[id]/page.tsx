'use client';
import Header from '@/components/features/Header';
import VideoForm from '../components/VideoForm';
import Footer from '@/components/features/Footer';

const Room = () => {
  return (
    <div className='bg-[#281759] h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      <VideoForm />
      <Footer/>
    </div>
  );
};

export default Room;
