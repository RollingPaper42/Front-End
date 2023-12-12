'use client';

import { useRecoilState } from 'recoil';

import { HeaderProfileCat, LogoCat } from '../Icon/Header';
import { drawerState, themeState } from '@/recoil/state';
import Link from 'next/link';

export default function DefaultHeader() {
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);

  return (
    <div className="fixed top-0 z-button w-full max-w-md">
      <div
        className={`flex h-[56px] flex-row items-center justify-between ${theme.bgTheme.background} px-[24px]`}
        id="catHeader"
      >
        <Link href="/" scroll={false}>
          <LogoCat
            bodyColor={theme.catTheme.headerCat}
            eyeColor={theme.catTheme.headerCatEye}
          />
        </Link>
        <div className="basis-4/6"></div>
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
      </div>
    </div>
  );
}
