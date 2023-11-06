'use client';

import { RecoilRoot } from 'recoil';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="m-auto h-full max-w-[calc(100vh*0.6)]">
          <RecoilRoot>{children}</RecoilRoot>
        </div>
      </body>
    </html>
  );
}
