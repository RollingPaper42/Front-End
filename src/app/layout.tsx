'use client';

import { RecoilRoot } from 'recoil';

import InApp from './InApp';
import './globals.css';
import AxiosInterceptor from '@/component/AxiosInterceptor';
import HeaderLayout from '@/component/HeaderLayout';
import Modal from '@/component/Modal';
import OpenGraph from '@/component/OpenGraph';

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
        <div className="m-auto h-full max-w-md font-pretentdard">
          <InApp />
          <RecoilRoot>
            <AxiosInterceptor />
            <Modal />
            <HeaderLayout />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
