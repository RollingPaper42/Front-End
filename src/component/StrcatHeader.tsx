'use client';

import { useLogin } from '@/hooks/useLogin';
import { drawerState } from '@/recoil/drawer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function StrcatHeader() {
  const [isLogin, checkLogin] = useLogin();
  const [, setDrawer] = useRecoilState(drawerState);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <div className="flex h-[56px] flex-row items-center justify-between bg-black px-[24px]">
      <Link href="/">
        <Image
          src="/Logo.svg"
          width={89}
          height={39}
          alt="logo"
          priority
          loading="eager"
        />
      </Link>
      <div className="basis-4/6"></div>
      {isLogin ? (
        <Image
          src="/ProfileImg.svg"
          width={24}
          height={24}
          alt="profileImg"
          loading="eager"
          priority
          onClick={() => setDrawer(true)}
        />
      ) : (
        <Link href="/login">
          <div className="relative h-[34px] w-[74px]">
            <Image
              src="/LoginButton.svg"
              width={74}
              height={34}
              alt="login"
              loading="eager"
              className="absolute inset-0"
              priority
            />
            <span className="absolute inset-0 flex items-center justify-center text-white">
              로그인
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
