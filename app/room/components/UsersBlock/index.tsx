'use client';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import s from './UsersBlock.module.scss';
import Button from '@/components/ui/Button';

interface UserData {
  id: number;
  name: string;
}

const UsersBlock: React.FC = () => {
  const [userCount, setUserCount] = useState<number>(1);
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('userCountUpdated', (count: number) => {
      setUserCount(count);
    });

    socket.on('usersUpdated', (data: UserData[]) => {
      setUsers(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const userBlocks = [];
  for (let i = 0; i < userCount; i++) {
    userBlocks.push(
      <div key={i} className={s.userBlock}>
        {users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex items-center mb-[65px]'>
      <div className='px-[22px] pt-[10px] pb-[15px] rounded-[10px] bg-[#160B29] w-[34%] ml-[50px] mr-[30px]'>{userBlocks}</div>
      <Button className='text-[#fff] px-[20px] py-[15px] w-[145px] h-[115px] bg-[#160B29] items-center flex text-[14px]'>Добавить пользователя /ᐠ - ˕ -マ - ᶻ 𝗓 𐰁</Button>
    </div>
  );
};

export default UsersBlock;
