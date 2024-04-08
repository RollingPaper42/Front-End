import { useState } from 'react';

import DownArrow from '../../Icon/drawer/DownArrow';
import UpArrow from '../../Icon/drawer/UpArrow';
import DropListItem from './DropListItem';
import { bodyFontState } from '@/recoil/font/body';
import { titleFontState } from '@/recoil/font/title';
import { drawerBoard } from '@/types/drawerBoard';
import { defaultState } from '@/utils/theme/default';

interface Props {
  title: string;
  list: drawerBoard[];
}

export default function DropList({ title, list }: Props) {
  const [dropList, setDropList] = useState<boolean>(false);

  return (
    <>
      <div className="flex w-full items-center justify-between px-[24px] py-[12px]">
        <h1 className={`select-none ${titleFontState.titleLabel}`}>{title}</h1>
        <div onClick={() => setDropList(!dropList)}>
          <div className="flex justify-end space-x-2">
            <div className=" text-gray-500">{list.length}</div>
            <div>{dropList ? <DownArrow /> : <UpArrow />}</div>
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          dropList ? 'max-h-[220px]' : 'max-h-0'
        } overflow-y-auto overflow-hidden ${
          defaultState.drawerList
        } w-full  scrollbar-thumb-textarea-bg scrollbar-thin scrollbar-thumb-rounded-[7px] `}
      >
        <DropListItem list={list} category={'personal'} />
      </div>
    </>
  );
}
