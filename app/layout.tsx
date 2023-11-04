'use client';

import './globals.css';
import '../firebase/firebase';
import { Montserrat } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { PropsWithChildren } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang='ru'>
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
