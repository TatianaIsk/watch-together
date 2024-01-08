'use client';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Image from 'next/image';
import user from '@/assets/user.svg';

interface User {
  id: string;
  name: string;
}

const UsersBlock: React.FC = () => {
  const [userCount, setUserCount] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('userCountUpdated', (count: number) => {
      setUserCount(count);
    });

    socket.on('usersUpdated', (data: User[]) => {
      setUsers(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const userBlocks = [];
  for (let i = 0; i < userCount; i++) {
    userBlocks.push(
      <div key={i}>
        {users.map((user) => (
          <div key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    );
  }

  return <div>{userBlocks}</div>;
};

export default UsersBlock;
