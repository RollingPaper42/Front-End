import {
  Dispatch,
  SetStateAction,
  forwardRef,
  use,
  useEffect,
  useState,
} from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';

import Add from './Add';
import ObserveContent from './ObserveContent';
import ObserveTitle from './ObserveTitle';
import ShareButton from './ShareButton';
import { useLogin } from '@/hooks/useLogin';
import { observeState } from '@/recoil/observe';
import { board } from '@/types/boards';
import { content } from '@/types/content';

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
  const [observe, setObserve] = useRecoilState(observeState);
  const [content, setContent] = useState<content[]>([]);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setContent(board.contents);
    if (board.contents.length === 1) {
      setObserve(() => ({
        boardId: board.id,
        contentId: board.contents[0].id,
        photoUrl: board.contents[0].photoUrl,
        writer: board.contents[0].writer,
      }));
    }
  }, [board]);

  return (
    <div ref={ref} className={` h-auto min-h-[424px] break-all  px-[24px] `}>
      <ObserveTitle isAdd={isAdd} board={board} />
      <div className="text-strcat-gray3 text-[16px]">
        {content.length}개의 마음이 {text.length}자 이어졌어요!
      </div>
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
