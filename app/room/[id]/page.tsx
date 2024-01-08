'use client';
import Header from '@/components/features/Header';
import VideoForm from '../components/VideoForm';
import Footer from '@/components/features/Footer';
import ChatForm from '../components/ChatForm';
import UsersBlock from '../components/UsersBlock';

const Room = () => {
  return (
    <div className='bg-[#281759] h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      <VideoForm />
      <ChatForm />
      <UsersBlock />
      <Footer />
    </div>
  );
};

export default Room;
