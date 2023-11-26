import { content } from '@/types/content';
import ObserveContent from './ObserveContent';
import {
  forwardRef,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeObj, themeState } from '@/recoil/theme';
import Add from './Add';
import { observeState } from '@/recoil/observe';
import { board } from '@/types/boards';
import ObserveTitle from './ObserveTitle';
import { setupFsCheck } from 'next/dist/server/lib/router-utils/filesystem';

interface Props {
  board: board;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
}

const StrcatBoard = forwardRef<HTMLDivElement, Props>(function StrcatBoard(
  { board, isAdd, setIsAdd },
  ref,
) {
  const [observe] = useRecoilState(observeState);
  const [theme, setTheme] = useRecoilState(themeState);
  const [content, setContent] = useState(board.contents);
  useEffect(() => {
    setContent(board.contents);
  }, [board]);
  return (
    <div
      ref={ref}
      className={` font-FiraCode ${theme.background} px-[24px] duration-200`}
    >
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
        />
      )}
      {!isAdd && <div className=" h-12"></div>}
    </div>
  );
});

export default React.memo(StrcatBoard);
