import Link from 'next/link';

import Footer from '@/components/features/Footer';
import Header from '@/components/features/Header';
import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';

const Login = () => {
  return (
    <div className='bg-[#281759] h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      <div className='flex justify-center'>
        <Form title='Войти и смотреть фильмы'>
          <Input placeholder='Логин' />
          <Input placeholder='Пароль' type='password' />
          <div className='flex flex-col items-center'>
            <Button className='w-[250px] rounded-[8px]  px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:border-opacity-100 hover:opacity-75 transition bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#0C0A22] cursor-pointer mt-9'>
              Войти
            </Button>
            <Link
              href='/register'
              passHref
              className=' border-opacity-50 px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-[#E0E29E] font-bold hover:border-opacity-100 hover:opacity-75 transition mt-3'
            >
              Зарегистрироваться
            </Link>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
