import { content } from '@/types/content';
import ObserveComponent from './ObserveComponent';
import { forwardRef, useState } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/modal';
import Photo from './Modal/Photo';

const StrcatComponent = forwardRef<
  HTMLDivElement,
  {
    title: string;
    data: content[] | undefined;
  }
>(function StrcatComponent({ title, data }, ref) {
  const [idx, setIdx] = useState(0);
  const [, setModal] = useRecoilState(modalState);
  const [img, setImg] = useState('');

  if (!data) return null;

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
              photo={item.photo}
              setImg={setImg}
            ></ObserveComponent>
          );
        })}
      </div>
      <div className="fixed top-[100px] h-24 w-24">
        {img.length !== 0 && (
          <Image
            src={img}
            alt="사진"
            fill
            onClick={() => {
              setModal({ modalComponent: <Photo photo={img} /> });
            }}
          />
        )}
      </div>
    </div>
  );
});

export default StrcatComponent;
