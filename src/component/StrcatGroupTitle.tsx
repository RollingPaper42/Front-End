import { themeObj } from '@/recoil/theme';
import { board } from '@/types/boards';
import Strcat from './Icon/Strcat';
import { titleFont } from '@/recoil/font';

interface Props {
  board: board;
  scrollToId: (arg0: string) => void;
}

export default function StrcatGroupTitle({ board, scrollToId }: Props) {
  const theme = themeObj[board.theme];
  return (
    <div
      key={board.id}
      className={` flex h-[110px] items-center ${theme.bgTheme.background} p-[22px]`}
      onClick={() => scrollToId(board.id)}
    >
      <Strcat
        eyeColor={theme.catTheme.headerCatEye}
        bodyColor={theme.catTheme.headerCat}
      />
      <p
        className={` cursor-pointer pl-[12px] ${titleFont.category1} ${theme.textTheme.title}`}
      >
        {`${board.title}`}
      </p>
    </div>
  );
}
