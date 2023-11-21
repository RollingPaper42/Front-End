'use client';

import { RecoilRoot } from 'recoil';
import './globals.css';
import Modal from '@/component/Modal';
import StrcatHeader from '@/component/StrcatHeader';
import Drawer from '@/component/Drawer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="m-auto h-full max-w-[calc(100vh*0.6)]">
          <RecoilRoot>
            <Drawer />
            <StrcatHeader />
            <Modal />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
