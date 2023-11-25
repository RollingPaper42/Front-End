import { themeObj } from '@/recoil/theme';
import { board } from '@/types/boards';

interface Props {
  board: board;
  scrollToId: (arg0: number) => void;
}

export default function StrcatGroupTitle({ board, scrollToId }: Props) {
  return (
    <div
      key={board.id}
      className={`my-[32px] ${themeObj[board.theme].background}`}
      onClick={() => scrollToId(board.id)}
    >
      <p
        className={`cursor-pointer text-xl ${themeObj[board.theme].background}`}
      >
        {board.title}
      </p>
    </div>
  );
}
