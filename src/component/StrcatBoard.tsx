import { content } from '@/types/content';
import ObserveContent from './ObserveContent';
import {
  forwardRef,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
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
}

const StrcatBoard = forwardRef<HTMLDivElement, Props>(function StrcatBoard(
  { board, isAdd, setIsAdd, isPersonal, paramsId },
  ref,
) {
  const [isLogin] = useLogin();
  const [observe, setObserve] = useRecoilState(observeState);
  const [observeCount, setObserveCount] = useState(0);
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

  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    console.log(observeCount, 'count ');
    if (observeCount < 1) {
      setObserveCount((prev) => 1);
    }
    if (observeCount < 3) {
      document.body.style.overflow = 'auto';
      return;
    }

    document.body.style.overflow = 'hidden';
    const currTime = Date.now();

    const tsHandler = (e: any) => {
      setTouchStart(e.targetTouches[0].pageY);
    };

    const tmHandler = (e: any) => {
      const nextTime = Date.now();

      if (nextTime - currTime > 128) {
        const dy = touchStart - e.targetTouches[0].pageY;

        // move to up
        if (dy < 0) {
          setObserve((prev) => ({ ...prev, contentId: prev.contentId - 1 }));
          setObserveCount((prev) => prev - 1);
        }

        // move to down
        if (dy > 0) {
          setObserve((prev) => ({ ...prev, contentId: prev.contentId + 1 }));
          setObserveCount((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('touchstart', tsHandler);
    window.addEventListener('touchmove', tmHandler);
    return () => {
      console.log('dispose');
      window.removeEventListener('touchstart', tsHandler);
      window.removeEventListener('touchmove', tmHandler);
    };
  }, [observe, touchStart, observeCount]);

  return (
    <div ref={ref} className={` h-auto min-h-[424px] break-all  px-[24px] `}>
      <ObserveTitle isAdd={isAdd} board={board} />
      <div className={`z-0 inline`}>
        {content &&
          content.map((content: content) => {
            return (
              <ObserveContent
                isAdd={isAdd}
                key={content.id}
                content={content}
                boardId={board.id}
                setObserve={setObserve}
                observe={observe}
                setObserveCount={setObserveCount}
                observeCount={observeCount}
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
