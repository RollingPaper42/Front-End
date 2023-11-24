'use client';

import { RecoilRoot } from 'recoil';
import './globals.css';
import Modal from '@/component/Modal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full">
      <body className="h-full">
        <div className="m-auto h-full max-w-[calc(100vh*0.6)] font-sans">
          <RecoilRoot>
            <Modal />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
