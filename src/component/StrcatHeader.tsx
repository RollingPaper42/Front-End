'use client';

import { useLogin } from '@/hooks/useLogin';
import { drawerState, themeState } from '@/recoil/state';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LogoCat, HeaderProfileCat, Outline } from './Icon/Header';

export default function StrcatHeader() {
  const [isLogin, checkLogin] = useLogin();
  const pathName = usePathname();
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="fixed top-0 z-10 w-full max-w-md">
      <div
        className={`flex h-[56px] flex-row items-center justify-between ${theme.background} px-[24px]`}
      >
        <Link href="/" scroll={false}>
          <LogoCat
            bodyColor={theme.catTheme.headerCat}
            eyeColor={theme.catTheme.headerCatEye}
          />
        </Link>
        <div className="basis-4/6"></div>
        {isLogin ? (
          <div onClick={() => setDrawer(true)}>
            <HeaderProfileCat
              circleColor={theme.catTheme.profileCircle}
              eyeColor={theme.catTheme.headerCatEye}
              bodyColor={theme.catTheme.profileCat}
            />
          </div>
        ) : (
          <Link
            href="/login"
            scroll={false}
            onClick={() =>
              localStorage.setItem('strcat_login_success_url', pathName)
            }
          >
            <div className="relative h-[34px] w-[74px]">
              <div className="absolute inset-0">
                <Outline color={theme.loginIcon} />
              </div>
              <span
                className={`absolute inset-0 flex items-center justify-center ${theme.defaultText}`}
              >
                {pathName === 'login' ? '홈으로' : '로그인'}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
