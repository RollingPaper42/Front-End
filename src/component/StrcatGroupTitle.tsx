import { themeObj } from '@/recoil/theme';
import { board } from '@/types/boards';
import Strcat from './Icon/Strcat';

interface Props {
  board: board;
  scrollToId: (arg0: string) => void;
}

export default function StrcatGroupTitle({ board, scrollToId }: Props) {
  const theme = themeObj[board.theme];
  return (
    <div
      key={board.id}
      className={` flex h-[110px] items-center ${theme.background}`}
      onClick={() => scrollToId(board.id)}
    >
      <Strcat
        eyeColor={theme.catTheme.headerCatEye}
        bodyColor={theme.catTheme.headerCat}
      />
      <p className={`mx-[24px] cursor-pointer text-xl ${theme.background}`}>
        {`// ${board.title}`}
      </p>
    </div>
  );
}
