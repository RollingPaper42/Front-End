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
    <html>
      <body>
        <div className="font-sans m-auto h-full max-w-[calc(100vh*0.6)]">
          <RecoilRoot>
            <Modal />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
