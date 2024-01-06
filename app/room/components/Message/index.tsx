import { PropsWithChildren } from 'react';

import clsx from 'clsx';

interface MessageProps extends PropsWithChildren {
  sender: string;
  className?: string;
}

const ChatMessage: React.FC<MessageProps> = ({ sender, children, className }) => {
  return (
    <div className={clsx(sender === 'user' ? 'message user-message' : 'message', className, 'flex my-4 mx-5 bg-[#160B29] p-2 rounded-[10px]')} >
      <p className='mr-2'>{sender}:</p>
      {children}
    </div>
  );
};

export default ChatMessage;
