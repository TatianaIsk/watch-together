import Header from '@/components/features/Header';
import PageContent from './components/PageContent';

export default function Home() {
  return (
    <div className='bg-[#281759] rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      <PageContent />
    </div>
  );
}
