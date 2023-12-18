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
  const clairtyCode = `(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", ${process.env.NEXT_PUBLIC_CLARITY_ID});`;

  const googleAnalyticsCode = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ID});
  `;

  return (
    <html className="h-full">
      <head>
        <Script id="ms-clarity" strategy="afterInteractive">
          {clairtyCode}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
        />
        <Script id="google-analytics">{googleAnalyticsCode}</Script>
        <title>STRCAT : 글을 이어 만드는 롤링페이퍼</title>
        <OpenGraph />
        <Description />
        <link rel="icon" href="/Favicon.png"></link>
        <meta
          key="naver"
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_ID}
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
