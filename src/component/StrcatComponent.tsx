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
  }
>(function StrcatComponent({ title, data, boardId }, ref) {
  const [theme] = useRecoilState(themeState);
  return (
    <div className="inline font-FiraCode">
      <div ref={ref}>
        <h1 className={` pb-[300px] text-[28px] ${theme.DefaultFontColor} `}>
          {title}
        </h1>
      </div>
      <div className="z-0 inline">
        {data &&
          data.map((content: content) => {
            return (
              <ObserveComponent
                key={content.id}
                content={content}
                boardId={boardId}
              ></ObserveComponent>
            );
          })}
      </div>
    </div>
  );
});

export default React.memo(StrcatComponent);
