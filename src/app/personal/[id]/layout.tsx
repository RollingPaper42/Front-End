'use client';

import HeaderLayout from '@/component/HeaderLayout';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLayout />
      {children}
    </>
  );
}
