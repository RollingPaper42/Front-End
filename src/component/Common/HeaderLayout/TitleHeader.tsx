'use client';

import { useRecoilState } from 'recoil';

import { HamburgerMenu } from '../Icon/Header';
import { useScroll } from '@/hooks/useScroll';
import { drawerState } from '@/recoil/drawer';
import { drawerOpen } from '@/utils/drawerOpen';
import { defaultState } from '@/utils/theme/default';

interface Props {
  title: string;
}

export default function TitleHeader({ title }: Props) {
  const [, setDrawer] = useRecoilState(drawerState);
  const { isHidden } = useScroll();

  return (
    <div
      className={`fixed top-0 z-10 w-full max-w-md transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className={`flex min-h-[52px] flex-row items-stretch justify-between py-[16px] ${defaultState.background} bg-opacity-80 px-[24px]`}
        id="titleHeader"
      >
        <div
          className={`flex items-center pr-[8px] text-headline-size2 font-bold leading-8 tracking-[-0.48px] ${defaultState.activateText}`}
        >
          {title}
        </div>
        <div className="pt-[4px]" onClick={() => drawerOpen(setDrawer)}>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
