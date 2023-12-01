import { Dispatch, useState } from 'react';
import DrawerItem from './DrawerItem';
import Strcat from '../Icon/Strcat';
import { DropListDown, DropListUp } from '../Icon/Drawer';
import DropListItem from './DropListItem';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
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
        className="flex h-[54px] w-full items-center justify-between px-[24px]"
        onClick={handleDropDown}
      >
        <DrawerItem
          title={title}
          icon={
            <Strcat
              eyeColor={catTheme.headerCatEye}
              bodyColor={catTheme.headerCat}
            />
          }
        />
        {list.length != 0 && (
          <div className="ml-[12px]">
            {dropDown ? (
              <DropListUp color={theme.defaultIcon} />
            ) : (
              <DropListDown color={theme.defaultIcon} />
            )}
          </div>
        )}
      </div>
      {dropDown && (
        <div className="flex max-h-[216px] w-full flex-col overflow-y-scroll">
          {list && <DropListItem list={list} category={category} />}
        </div>
      )}
    </>
  );
}
