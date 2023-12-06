'use client';

import { RecoilRoot } from 'recoil';
import './globals.css';
import Modal from '@/component/Modal';
import AxiosInterceptor from '@/component/AxiosInterceptor';
import OpenGraph from '@/component/OpenGraph';
import InApp from './InApp';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full">
      <head>
        <title>strcat : 글을 이어 만드는 롤링페이퍼</title>
        <OpenGraph />
        <link rel="icon" href="/Favicon.png"></link>
      </head>
      <body className="h-full overscroll-none">
        <div className="m-auto h-full max-w-md font-sans">
          <RecoilRoot>
            <InApp />
            <AxiosInterceptor />
            <Modal />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
