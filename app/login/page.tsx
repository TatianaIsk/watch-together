'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '@/store/slices/userSlice';

import Link from 'next/link';

import Footer from '@/components/features/Footer';
import Header from '@/components/features/Header';
import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        router.push('/');
      })
      .catch(console.error);
  };

  return (
    <div className='bg-[#281759] h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      <div className='flex justify-center'>
        <Form title='Войти'>
          <Input placeholder='Логин' value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder='Пароль' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <div className='flex flex-col items-center'>
            <Button
              className='w-[250px] rounded-[8px]  px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:border-opacity-100 hover:opacity-75 transition bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#0C0A22] cursor-pointer mt-9'
              onClick={handleLogin}
            >
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