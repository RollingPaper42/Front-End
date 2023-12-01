'use client';

import { useEffect, useState } from 'react';
import { useLogin } from '@/hooks/useLogin';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { drawerState, themeState } from '@/recoil/state';
import { HeaderProfileCat, LogoCat, LogoText, Outline } from '../Icon/Header';

export default function DefaultHeader() {
  const [isLogin, checkLogin] = useLogin();
  const pathName = usePathname();
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);
  const [animationHeader, setAnimationHeader] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (
      (pathName.indexOf('/personal') === 0 ||
        pathName.indexOf('/group') === 0) &&
      pathName.indexOf('/export') === -1
    ) {
      setAnimationHeader(true);
    }
  }, [pathName]);

  return (
    <div className="fixed top-0 z-10 w-full max-w-md">
      <div
        className={`flex h-[56px] flex-row items-center justify-between ${theme.background} px-[24px]`}
        id="catHeader"
      >
        {animationHeader ? (
          <Link href="/" scroll={false}>
            <div className="relative h-[40px] w-[120px]">
              <LogoText color={theme.catTheme.headerCat} />
            </div>
          </Link>
        ) : (
          <Link href="/" scroll={false}>
            <LogoCat
              bodyColor={theme.catTheme.headerCat}
              eyeColor={theme.catTheme.headerCatEye}
            />
          </Link>
        )}
        <div className="basis-4/6"></div>
        {isLogin ? (
          <div
            onClick={() => {
              setDrawer(true);
              document.body.style.overflow = 'hidden';
            }}
          >
            <HeaderProfileCat
              circleColor={theme.catTheme.profileCircle}
              eyeColor={theme.catTheme.headerCatEye}
              bodyColor={theme.catTheme.profileCat}
            />
          </div>
        ) : (
          <Link
            href={pathName === '/login' ? '/' : '/login'}
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
                {pathName === '/login' ? '홈으로' : '로그인'}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
