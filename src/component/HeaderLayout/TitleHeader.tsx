'use client';

import { useRecoilState } from 'recoil';

import Close from '../Icon/Close';
import { HamburgerMenu } from '../Icon/Header';
import useModal from '@/hooks/useModal';
import { useScroll } from '@/hooks/useScroll';
import { drawerState, themeState, titleState } from '@/recoil/state';
import { confirm } from '@/utils/confirm';
import { drawerOpen } from '@/utils/drawerOpen';
import { usePathname, useRouter } from 'next/navigation';

export default function TitleHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const isAdd = pathname.endsWith('/add');
  const [title] = useRecoilState(titleState);
  const [, setDrawer] = useRecoilState(drawerState);
  const [theme] = useRecoilState(themeState);
  const { isHidden } = useScroll({ scrollEvent: !isAdd });
  const [openModal, closeModal] = useModal();

  const backUrl = pathname.substring(0, pathname.lastIndexOf('/'));
  const handleAddClose = async () => {
    const isConfirmed = await confirm(
      openModal,
      closeModal,
      '글 작성을 취소하시겠어요?',
    );
    if (isConfirmed) router.push(backUrl);
    //수정
  };

  if (isAdd && title === '') {
    router.push(backUrl);
  }

  return (
    <div
      className={`fixed top-0 z-10 w-full max-w-md transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className={`flex min-h-[52px] flex-row items-stretch justify-between py-[16px] ${theme.bgTheme.background} bg-opacity-80 px-[24px]`}
        id="titleHeader"
      >
        <div className="flex select-none items-center pr-[8px] text-headline-size2 font-bold leading-8 tracking-[-0.48px] text-white">
          {title}
        </div>
        {isAdd ? (
          <div className="pt-[4px]" onClick={handleAddClose}>
            <Close />
          </div>
        ) : (
          <div className="pt-[4px]" onClick={() => drawerOpen(setDrawer)}>
            <HamburgerMenu />
          </div>
        )}
      </div>
    </div>
  );
}
