'use client';

import { useCat } from '@/hooks/useCat';
import { useLogin } from '@/hooks/useLogin';
import { drawerState, themeState } from '@/recoil/state';
import { catAction } from '@/types/animation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

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
          <Link
            href="/login"
            onClick={() =>
              localStorage.setItem('strcat_login_success_url', pathName)
            }
          >
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
