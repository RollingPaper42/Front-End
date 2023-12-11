'use client';

import { useRecoilState } from 'recoil';

import { HamburgerMenu } from '../Icon/Header';
import { drawerState, themeState, titleState } from '@/recoil/state';

export default function TitleHeader() {
  const [title] = useRecoilState(titleState);
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);

  return (
    <div className="fixed top-0 z-10 w-full max-w-md">
      <div
        className={`flex min-h-[56px] py-[10px] flex-row items-stretch justify-between ${theme.bgTheme.background} px-[24px]`}
        id="titleHeader"
      >
        <div className="text-white pr-[8px] text-24px font-bold flex items-center">
          {title}
        </div>
        <div
          onClick={() => {
            setDrawer(true);
            document.body.style.overflow = 'hidden';
          }}
        >
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
