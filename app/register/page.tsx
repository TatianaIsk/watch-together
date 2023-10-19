'use client'

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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const auth = getAuth();

    if (password !== confirmPassword) {
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
      .catch(console.error);
  };

  return (
    <div className='bg-[#281759] h-full w-full overflow-hidden overflow-y-auto'>
      <Header />
      <div className='flex justify-center'>
        <Form title='Зарегистрироваться'>
          <Input placeholder='Логин' value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder='Пароль' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <Input placeholder='Подтвердите пароль' type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          {error && <p className='text-red-500 mt-2'>{error}</p>}
          <div className='flex flex-col items-center'>
            <Button
              onClick={handleRegister}
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
