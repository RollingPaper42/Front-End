import { content } from '@/types/content';
import ObserveComponent from './ObserveComponent';
<<<<<<< HEAD
import { useState } from 'react';

export default function StrcatComponent({
  title,
  data,
}: {
  title: string;
  data: content[];
}) {
  const [idx, setIdx] = useState(0);
=======
import { forwardRef, useEffect, useState } from 'react';

const StrcatComponent = forwardRef<
  HTMLDivElement,
  {
    title: string;
    data: content[] | undefined;
    boardId: number;
  }
>(function StrcatComponent({ title, data, boardId }, ref) {
>>>>>>> 955a208a527ac0c176897cdb2a219e92baca34a2
  return (
    <div className="inline">
      <div>
        <h1 className="black pb-[60%] text-[28px]">{title}</h1>
        {/* 솔님 기준으로 pb-변경하기*/}
      </div>
<<<<<<< HEAD
      <div className="z-0 inline">
        {data.map((item: content) => {
          return (
            <ObserveComponent
              key={item.id}
              id={item.id}
              content={item.text}
              idx={idx}
              setIdx={setIdx}
            ></ObserveComponent>
          );
        })}
=======
      <div className="z-0 inline ">
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
>>>>>>> 955a208a527ac0c176897cdb2a219e92baca34a2
      </div>
    </div>
  );
}
