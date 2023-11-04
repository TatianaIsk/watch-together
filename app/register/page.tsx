'use client';

import './../../style/_variables.scss';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '@/store/slices/userSlice';

import Footer from '@/components/features/Footer';
import Header from '@/components/features/Header';
import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';

type UserType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValue: UserType = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);

    const { email, password, confirmPassword } = userInfo;
    const auth = getAuth();

    if (password !== confirmPassword) {
      setLoading(false);
      setError('Passwords do not match!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='bg-$color-purple h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      <div className='flex justify-center'>
        <Form title='Зарегистрироваться'>
          <Input placeholder='Логин' name='email' value={userInfo.email} onChange={onHandleChange} />
          <Input placeholder='Пароль' name='password' type='password' value={userInfo.password} onChange={onHandleChange} />
          <Input placeholder='Подтвердите пароль' name='confirmPassword' type='password' value={userInfo.confirmPassword} onChange={onHandleChange} />
          {error && <p className='text-red-500 mt-2'>{error}</p>}
          <div className='flex flex-col items-center'>
            <Button
              onClick={handleRegister}
              disabled={loading}
              className='w-[250px] rounded-[8px]  px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:border-opacity-100 hover:opacity-75 transition bg-gradient-to-r from-[#E0E29E] to-[#ECBC87] text-[#0C0A22] cursor-pointer mt-9'
            >
              Зарегистрироваться
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
