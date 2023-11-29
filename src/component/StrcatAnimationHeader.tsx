'use client';

import { useCat } from '@/hooks/useCat';
import { useLogin } from '@/hooks/useLogin';
import { drawerState, themeState } from '@/recoil/state';
import { catAction } from '@/types/animation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { HeaderProfileCat, Outline } from './Icon/Header';

export default function StrcatAnimationHeader() {
  const [isLogin, checkLogin] = useLogin();
  const pathName = usePathname();
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);
  const [runCatAnimation] = useCat();

  useEffect(() => {
    checkLogin();
    runCatAnimation('catHeader', catAction.exit, 0);
  }, []);

  return (
    <div className="fixed top-0 z-10 w-full max-w-md">
      <div
        className={`flex h-[56px] flex-row items-center justify-between ${theme.background} px-[24px]`}
        id="catHeader"
      >
        <Link href="/">
          <div />
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
