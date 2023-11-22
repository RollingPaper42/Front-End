import { content } from '@/types/content';
import ObserveComponent from './ObserveComponent';
import { forwardRef, useEffect, useState } from 'react';
import React from 'react';

const StrcatComponent = forwardRef<
  HTMLDivElement,
  {
    title: string;
    data: content[] | undefined;
    boardId: number;
  }
>(function StrcatComponent({ title, data, boardId }, ref) {
  return (
    <div className="inline">
      <div ref={ref}>
        <h1 className="black pb-[300px] text-[28px]">{title}</h1>
      </div>
      <div className="z-0 inline pb-[500px]">
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
