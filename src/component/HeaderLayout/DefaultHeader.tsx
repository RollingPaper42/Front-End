'use client';

import { useRecoilState } from 'recoil';

import { HamburgerMenu } from '../Icon/Header';
import { defaultState } from '@/recoil/newtheme/default';
import { drawerState } from '@/recoil/state';
import { drawerOpen } from '@/utils/drawerOpen';

export default function DefaultHeader() {
  const [, setDrawer] = useRecoilState(drawerState);

  return (
    <div className="fixed top-0 z-button w-full max-w-md">
      <div
        className={`flex h-[56px] flex-row items-center justify-between select-none cursor-pointer ${defaultState.background} px-[24px]`}
      >
        <div
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <div className="font-sniglet font-extrabold text-[24px] leading-[32px] tracking-[-2%] text-white">
            STRCAT
          </div>
        </div>
        <div className="basis-4/6"></div>
        <div onClick={() => drawerOpen(setDrawer)}>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
