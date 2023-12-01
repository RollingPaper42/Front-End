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
import { useRecoilState } from 'recoil';
import Add from './Add';
import { observeState } from '@/recoil/observe';
import { board } from '@/types/boards';
import ObserveTitle from './ObserveTitle';
import ShareButton from './ShareButton';
import { useLogin } from '@/hooks/useLogin';
interface Props {
  board: board;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  isPersonal: boolean;
  paramsId?: string;
  isOwner: boolean;
}

const StrcatBoard = forwardRef<HTMLDivElement, Props>(function StrcatBoard(
  { board, isAdd, setIsAdd, isPersonal, paramsId, isOwner },
  ref,
) {
  const [observe, setObserve] = useRecoilState(observeState);
  const [content, setContent] = useState<content[]>([]);

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
      {!isAdd && isPersonal && isOwner && !content.length && (
        <ShareButton params={`/personal/${paramsId}`} />
      )}
    </div>
  );
});

export default React.memo(StrcatBoard);
