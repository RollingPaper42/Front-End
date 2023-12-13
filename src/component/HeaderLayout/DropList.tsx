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
      <div className="flex py-[12px] w-full items-center justify-between px-[24px]">
        <h1 className="text-body-size1 font-semibold select-none">
          내 스트링캣
        </h1>
        <div className=" text-gray-500 text-caption-size2 font-medium">
          {list.length}
        </div>
      </div>
      {list.length ? (
        <div className="flex max-h-[280px] h-full bg-[#1D1D1D] w-full flex-col overflow-scroll scrollbar-thumb-[#373737] scrollbar-thin scrollbar-thumb-rounded-[7px] ">
          <DropListItem list={list} category={category} />
        </div>
      ) : null}
    </>
  );
}
