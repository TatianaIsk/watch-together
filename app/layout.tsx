'use client';

import './globals.css';
import '../firebase/firebase';
import { Montserrat } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/store';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang='ru'>
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
}
