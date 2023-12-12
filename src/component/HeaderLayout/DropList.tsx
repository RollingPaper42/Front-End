import { Dispatch, useState } from 'react';
import { useRecoilState } from 'recoil';

import { DropListDown, DropListUp } from '../Icon/Drawer';
import Strcat from '../Icon/Strcat';
import DrawerItem from './DrawerItem';
import DropListItem from './DropListItem';
import { themeState } from '@/recoil/theme/theme';
import { drawerBoard } from '@/types/drawerBoard';

interface Props {
  title: string;
  list: drawerBoard[];
  category: string;
  dropDown: boolean;
  handleDropDown: () => void;
}

export default function DropList({
  title,
  list,
  category,
  dropDown,
  handleDropDown,
}: Props) {
  const [theme] = useRecoilState(themeState);
  const catTheme = theme.catTheme;

  return (
    <>
      <div
        className="flex mt-[18px] py-[12px] w-full items-center justify-between px-[24px]"
        onClick={handleDropDown}
      >
        <h1 className="text-body-size1 font-semibold select-none">
          내 스트링캣
        </h1>
      </div>
      <div className="flex max-h-[288px] w-full flex-col overflow-scroll scrollbar-thumb-[#373737] scrollbar-thin scrollbar-thumb-rounded-[7px] ">
        {list && <DropListItem list={list} category={category} />}
      </div>
    </>
  );
}
