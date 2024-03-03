import DropListItem from './DropListItem';
import { bodyFontState } from '@/recoil/font/body';
import { titleFontState } from '@/recoil/font/title';
import { drawerBoard } from '@/types/drawerBoard';
import { defaultState } from '@/utils/theme/default';

interface Props {
  title: string;
  list: drawerBoard[];
  category: string;
}

export default function DropList({ title, list, category }: Props) {
  return (
    <>
      <div className="flex w-full items-center justify-between px-[24px] py-[12px]">
        <h1 className={`select-none ${titleFontState.titleLabel}`}>{title}</h1>
        <div
          className={`cursor-default select-none ${bodyFontState.serviceBody}   text-gray-500`}
        >
          {list.length}
        </div>
      </div>
      {list.length ? (
        <div
          className={`flex max-h-[220px] h-full ${defaultState.drawerList} w-full flex-col overflow-scroll scrollbar-thumb-textarea-bg scrollbar-thin scrollbar-thumb-rounded-[7px]`}
        >
          <DropListItem list={list} category={category} />
        </div>
      ) : null}
    </>
  );
}
