import { content } from '@/types/content';
import ObserveContent from './ObserveContent';
import { forwardRef } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';

interface props {
  title: string;
  data: content[] | undefined;
  boardId: number;
  isAdd: boolean;
}

const StrcatBoard = forwardRef<HTMLDivElement, props>(function StrcatBoard(
  { title, data, boardId, isAdd },
  ref,
) {
  const [theme] = useRecoilState(themeState);
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
      {!isAdd && <div className=" h-12"></div>}
    </div>
  );
});

export default React.memo(StrcatBoard);
