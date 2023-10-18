import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/store';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'watchTogether',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang='ru'>
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
}
