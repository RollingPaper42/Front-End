'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';
import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<any>([]);
  const [idx, setIdx] = useState<number>(0);
  useEffect(() => {
    axiosInstance
      .get(`/api/text`)
      .then((data) => {
        setTitle(data.data.titleData.strcatTitle);
        setData(data.data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className=" w-full p-[24px]">
      <div>
        <h1 className="black text-6xl ">{title}</h1>
      </div>
      <div className="fixed bottom-5 left-[50%]  mx-0  w-full max-w-[calc(100vh*0.6)] -translate-x-[50%] p-[24px] ">
        <button className=" z-50 h-[48px] w-full bg-[#007afe]   text-[18px]  font-semibold text-white  opacity-100">
          <Link href={`../strcat/add`}>글 작성</Link>
        </button>
      </div>
      <div className="z-0 py-[50%]">
        {data.map((item: any) => {
          return (
            <ObserveComponent
              key={item.id}
              id={item.id}
              content={item.content}
              idx={idx}
              setIdx={setIdx}
            ></ObserveComponent>
          );
        })}
      </div>
    </div>
  );
}
