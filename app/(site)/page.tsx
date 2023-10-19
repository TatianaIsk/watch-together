import Header from '@/components/features/Header';
import PageContent from './components/PageContent';
import Footer from '@/components/features/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[#281759] h-full w-full overflow-hidden overflow-y-auto'>
      <Header>
        <div className='flex flex-end items-center gap-x-8'>
          <Link
            href='/login'
            passHref
            className='w-full rounded-[8px] border-solid border-opacity-50 px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-[#E0E29E] font-bold hover:border-opacity-100 hover:opacity-75 transition border-[#E0E29E] border-2 cursor-pointer'
          >
            Войти
          </Link>
          <Link
            href='/register'
            passHref
            className='w-full rounded-[8px]  px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:border-opacity-100 hover:opacity-75 transition bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#0C0A22] cursor-pointer'
          >
            Зарегистрироваться
          </Link>
        </div>
      </Header>
      <PageContent />
      <Footer />
    </div>
  );
}
