import { content } from '@/types/content';
import ObserveComponent from './ObserveComponent';
import { forwardRef, useEffect, useState } from 'react';

const StrcatComponent = forwardRef<
  HTMLDivElement,
  {
    title: string;
    data: content[] | undefined;
    boardId: number;
  }
>(function StrcatComponent({ title, data, boardId }, ref) {
  if (!data) return null;

  return (
    <div className="inline">
      <div ref={ref}>
        <h1 className="black pb-[60%] text-[28px]">{title}</h1>
        {/* 솔님 기준으로 pb-변경하기*/}
      </div>
      <div className="z-0 inline ">
        {data.map((content: content) => {
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

export default StrcatComponent;
