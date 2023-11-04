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

type UserType = {
  email: string;
  password: string;
};

const initialValue: UserType = {
  email: '',
  password: '',
};

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);

    const { email, password } = userInfo;
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
          <Input placeholder='Логин' name='email' value={userInfo.email} onChange={onHandleChange} />
          <Input placeholder='Пароль' name='password' type='password' value={userInfo.password} onChange={onHandleChange} />
          <div className='flex flex-col items-center'>
            <Button
              className='w-[250px] rounded-[8px]  px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:border-opacity-100 hover:opacity-75 transition bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#0C0A22] cursor-pointer mt-9'
              onClick={handleLogin}
              disabled={loading}
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
