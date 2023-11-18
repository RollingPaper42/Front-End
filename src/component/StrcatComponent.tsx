import { content } from '@/types/content';
import ObserveComponent from './ObserveComponent';
import { useState } from 'react';

export default function StrcatComponent({
  title,
  data,
}: {
  title: string;
  data: content[];
}) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="inline">
      <div>
        <h1 className="black pb-[60%] text-[28px]">{title}</h1>
        {/* 솔님 기준으로 pb-변경하기*/}
      </div>
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
      </div>
    </div>
  );
}
