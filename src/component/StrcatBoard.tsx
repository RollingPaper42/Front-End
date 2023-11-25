import { content } from '@/types/content';
import ObserveContent from './ObserveContent';
import { forwardRef, Dispatch, SetStateAction, useState } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeObj } from '@/recoil/theme';
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

  return (
    <div
      ref={ref}
      className={` font-FiraCode ${themeObj[board.theme].BgColor} px-[24px]`}
    >
      <ObserveTitle title={board.title} />
      <div className={`z-0 inline`}>
        {board.content &&
          board.content.map((content: content) => {
            return (
              <ObserveContent
                isAdd={isAdd}
                key={content.id}
                content={content}
                boardId={board.id}
                theme={board.theme}
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
