'use client';

import React from 'react';

import TitleHeader from '@/component/Common/HeaderLayout/TitleHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitleHeader />
      {children}
    </>
  );
}
