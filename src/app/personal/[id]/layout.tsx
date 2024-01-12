'use client';

import React from 'react';

import HeaderLayout from '@/component/Common/HeaderLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLayout />
      {children}
    </>
  );
}
