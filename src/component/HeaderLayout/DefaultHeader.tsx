'use client';

import { useRecoilState } from 'recoil';

import { HamburgerMenu, Logo } from '../Icon/Header';
import { defaultState } from '@/recoil/newtheme/default';
import { drawerState, themeState } from '@/recoil/state';
import { drawerOpen } from '@/utils/drawerOpen';
import Link from 'next/link';

export default function DefaultHeader() {
  const [, setDrawer] = useRecoilState(drawerState);

  return (
    <div className="fixed top-0 z-button w-full max-w-md">
      <div
        className={`flex h-[56px] flex-row items-center justify-between ${defaultState.background} px-[24px]`}
        id="catHeader"
      >
        <Link href="/" scroll={false}>
          <Logo />
        </Link>
        <div className="basis-4/6"></div>
        <div onClick={() => drawerOpen(setDrawer)}>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
