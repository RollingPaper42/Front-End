import { content } from '@/types/content';
import ObserveComponent from './ObserveComponent';
import { forwardRef, useEffect, useState } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';

const StrcatComponent = forwardRef<
  HTMLDivElement,
  {
    title: string;
    data: content[] | undefined;
    boardId: number;
    isAdd: boolean;
  }
>(function StrcatComponent({ title, data, boardId, isAdd }, ref) {
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
              <ObserveComponent
                isAdd={isAdd}
                key={content.id}
                content={content}
                boardId={boardId}
              ></ObserveComponent>
            );
          })}
      </div>
      {!isAdd && <div className=" h-12"></div>}
    </div>
  );
});

export default React.memo(StrcatComponent);
