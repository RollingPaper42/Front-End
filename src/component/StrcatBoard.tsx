import { content } from '@/types/content';
import ObserveContent from './ObserveContent';
import {
  forwardRef,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  use,
} from 'react';
import React from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import Add from './Add';
import { observeState } from '@/recoil/observe';
import { board } from '@/types/boards';
import ObserveTitle from './ObserveTitle';
import ShareButton from './ShareButton';
import { themeState } from '@/recoil/theme';
import { useLogin } from '@/hooks/useLogin';
interface Props {
  board: board;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  isPersonal: boolean;
  paramsId?: string;
}

const StrcatBoard = forwardRef<HTMLDivElement, Props>(function StrcatBoard(
  { board, isAdd, setIsAdd, isPersonal, paramsId },
  ref,
) {
  const [isLogin] = useLogin();
  const [observe] = useRecoilState(observeState);
  const [content, setContent] = useState<content[]>([]);
  const [theme, setTheme] = useRecoilState(themeState);
  useEffect(() => {
    setContent(board.contents);
  }, [board]);
  return (
    <div ref={ref} className={`break-all px-[24px]`}>
      <ObserveTitle isAdd={isAdd} board={board} />
      <div className={`z-0 inline`}>
        {content &&
          content.map((content: content) => {
            return (
              <ObserveContent
                boardTheme={board.theme}
                isAdd={isAdd}
                key={content.id}
                content={content}
                boardId={board.id}
              />
            );
          })}
      </div>
      {isAdd && board.id === observe.boardId && (
        <Add
          setContent={setContent}
          id={`${observe.boardId}`}
          setIsAdd={setIsAdd}
          boardTheme={board.theme}
        />
      )}
      {!isAdd && <div className=" h-12"></div>}
      {!isAdd && isLogin && isPersonal && !content.length && (
        <ShareButton params={`/personal/${paramsId}`} />
      )}
    </div>
  );
});

export default React.memo(StrcatBoard);
