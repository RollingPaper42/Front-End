'use client';

import { RecoilRoot } from 'recoil';

import InApp from './InApp';
import './globals.css';
import AxiosInterceptor from '@/component/AxiosInterceptor';
import Description from '@/component/Description';
import Modal from '@/component/Modal';
import OpenGraph from '@/component/OpenGraph';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NT9VXJJDMB" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NT9VXJJDMB');
        `}
        </Script>
        <title>strcat : 글을 이어 만드는 롤링페이퍼</title>
        <OpenGraph />
        <Description />
        <link rel="icon" href="/Favicon.png"></link>
        <meta
          key="naver"
          name="naver-site-verification"
          content="c075ea66f42b086697fe2754f53f08b0ee624bc2"
        />
      </head>
      <body className="h-full overscroll-none  bg-black/80">
        <div className="m-auto h-full max-w-md font-pretentdard">
          <InApp />
          <RecoilRoot>
            <AxiosInterceptor />
            <Modal />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
