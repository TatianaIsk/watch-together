import { useEffect, useRef, useState } from 'react';
import ChatMessage from '../Message';
import Input from '@/components/ui/Input';

import s from './ChatForm.module.scss'

interface Message {
  text: string;
  sender: string;
}

const ChatForm = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');
  };

  return (
    <div className='absolute right-[50px] top-[260px] bg-[#1E1241] w-[727px] rounded-[8px] pb-[15px]'>
      <div className=''>
        <div className='h-[243px] overflow-y-auto'>
          {messages.map((message, index) => (
            <ChatMessage key={index} sender={message.sender}>
              {message.text}
            </ChatMessage>
          ))}
					<div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleFormSubmit} className='relative flex items-center'>
          <Input type='text' value={inputText} onChange={handleInputChange} className={s.input}/>
          <button type='submit' className='absolute right-10 top-1/2 transform -translate-y-1/2'>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
