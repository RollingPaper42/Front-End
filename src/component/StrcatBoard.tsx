import { content } from '@/types/content';
import ObserveContent from './ObserveContent';
import { forwardRef, Dispatch, SetStateAction } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Add from './Add';
import { observeState } from '@/recoil/observe';

interface Props {
  title: string;
  data: content[] | undefined;
  boardId: number;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
}

const StrcatBoard = forwardRef<HTMLDivElement, Props>(function StrcatBoard(
  { title, data, boardId, isAdd, setIsAdd },
  ref,
) {
  const [theme] = useRecoilState(themeState);
  const [observe] = useRecoilState(observeState);
  return (
    <div ref={ref} className={`inline font-FiraCode`}>
      <div className="h-[200px]">
        <h1 className={` text-[28px] ${theme.DefaultFontColor} `}>{title}</h1>
      </div>
      <div className={`z-0 inline`}>
        {data &&
          data.map((content: content) => {
            return (
              <ObserveContent
                isAdd={isAdd}
                key={content.id}
                content={content}
                boardId={boardId}
              />
            );
          })}
      </div>
      {isAdd && boardId === observe.boardId && (
        <Add id={`${observe.boardId}`} setIsAdd={setIsAdd} />
      )}
      {!isAdd && <div className=" h-12"></div>}
    </div>
  );
});

export default React.memo(StrcatBoard);
