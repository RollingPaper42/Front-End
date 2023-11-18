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
    <div>
      <div ref={ref}>
        <h1 className="black text-[28px] ">{title}</h1>
      </div>
      <div className="z-0 pb-[70%] pt-[80%] text-justify">
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
