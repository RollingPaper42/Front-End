import { useRecoilState } from 'recoil';

import DropListItem from './DropListItem';
import { themeState } from '@/recoil/theme/theme';
import { drawerBoard } from '@/types/drawerBoard';

interface Props {
  list: drawerBoard[];
  category: string;
}

export default function DropList({ list, category }: Props) {
  return (
    <>
      <div className="flex w-full items-center justify-between px-[24px] py-[12px]">
        <h1 className="select-none text-body-size1 font-semibold">
          내 스트링캣
        </h1>
        <div className="cursor-default select-none text-caption-size2 font-medium text-gray-500">
          {list.length}
        </div>
      </div>
      {list.length ? (
        <div className="flex h-full max-h-[280px] w-full flex-col overflow-scroll bg-[#1D1D1D] scrollbar-thin scrollbar-thumb-[#373737] scrollbar-thumb-rounded-[7px] ">
          <DropListItem list={list} category={category} />
        </div>
      ) : null}
    </>
  );
}
