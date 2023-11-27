'use client';

import { useLogin } from '@/hooks/useLogin';
import { drawerState, themeState } from '@/recoil/state';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function StrcatHeader() {
  const [isLogin, checkLogin] = useLogin();
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <div className="fixed top-0 z-10 w-full max-w-md">
      <div
        className={`flex h-[56px] flex-row items-center justify-between ${theme.background} px-[24px]`}
      >
        <Link href="/">
          <Image
            src={`/Logo_${theme.name}.svg`}
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
            src={`/ProfileImg_${theme.name}.svg`}
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
                src={`/LoginButton_${theme.name}.svg`}
                width={74}
                height={34}
                alt="login"
                loading="eager"
                className="absolute inset-0"
                priority
              />
              <span
                className={`absolute inset-0 flex items-center justify-center ${theme.defaultText}`}
              >
                로그인
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
