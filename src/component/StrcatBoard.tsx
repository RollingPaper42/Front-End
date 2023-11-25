import { content } from '@/types/content';
import ObserveContent from './ObserveContent';
import { forwardRef, Dispatch, SetStateAction, useState } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeObj, themeState } from '@/recoil/theme';
import Add from './Add';
import { observeState } from '@/recoil/observe';
import { board } from '@/types/boards';
import ObserveTitle from './ObserveTitle';

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

  return (
    <div
      ref={ref}
      className={` font-FiraCode ${theme.background} px-[24px] duration-200`}
    >
      <ObserveTitle title={board.title} />
      <div className={`z-0 inline`}>
        {board.content &&
          board.content.map((content: content) => {
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
        <Add id={`${observe.boardId}`} setIsAdd={setIsAdd} />
      )}
      {!isAdd && <div className=" h-12"></div>}
    </div>
  );
});

export default React.memo(StrcatBoard);
