import { content } from '@/types/content';
import ObserveComponent from './ObserveComponent';
import { forwardRef, useState } from 'react';

const StrcatComponent = forwardRef<
  HTMLDivElement,
  {
    title: string;
    data: content[];
  }
>(function StrcatComponent({ title, data }, ref) {
  const [idx, setIdx] = useState(0);

  return (
    <div>
      <div ref={ref}>
        <h1 className="black text-[28px] ">{title}</h1>
      </div>
      <div className="z-0 pb-[70%] pt-[80%] text-justify">
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
});

export default StrcatComponent;
