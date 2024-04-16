'use client';

import { RecoilRoot } from 'recoil';

import Script from 'next/script';

import './globals.css';
import AxiosInterceptor from '@/component/Common/AxiosInterceptor';
import Description from '@/component/Common/Description';
import Drawer from '@/component/Common/HeaderLayout/Drawer';
import Modal from '@/component/Common/Modal';
import OpenGraph from '@/component/Common/OpenGraph';
import InApp from '@/component/InApp';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full">
      <head>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function (c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "k73o8q506m");`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-NT9VXJJDMB`}
        />
        <Script id="google-analytics">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "G-NT9VXJJDMB");`}</Script>
        <title>STRCAT : 글을 이어 만드는 롤링페이퍼</title>
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
            <Drawer />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
