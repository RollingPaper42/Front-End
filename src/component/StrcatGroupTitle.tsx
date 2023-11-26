import { themeObj } from '@/recoil/theme';
import { board } from '@/types/boards';
import GroupCatIcon from './GroupCatIcon';

interface Props {
  board: board;
  scrollToId: (arg0: number) => void;
}

export default function StrcatGroupTitle({ board, scrollToId }: Props) {
  return (
    <div
      key={board.id}
      className={` flex h-[110px]  items-center ${
        themeObj[board.theme].background
      }`}
      onClick={() => scrollToId(board.id)}
    >
      <GroupCatIcon eyeColor="#FF43A8" bodyColor="#FBFF36" />
      <p
        className={`mx-[24px] cursor-pointer text-xl ${
          themeObj[board.theme].background
        }`}
      >
        {`// ${board.title}`}
      </p>
    </div>
  );
}
