'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';
import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';

export default function Home(props: any) {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<any>([]);
  const [idx, setIdx] = useState<number>(0);
  useEffect(() => {
    axiosInstance
      .get(`/api/text`)
      .then((data) => {
        //console.log(data.data.titleData);
        setTitle(data.data.titleData.strcatTitle);
        setData(data.data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="bg-lime-300">
      <div className="p-5">
        <span className="black text-6xl ">{title}</span>
      </div>
      <div className="px-[24px] py-[50%]">
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
      <button className=" bg-white p-6">
        <Link href={`../strcat/add`}>공유하기</Link>
      </button>
      <button className=" bg-white p-6">
        <Link href={`../strcat/export`}>내보내기</Link>
      </button>
    </div>
  );
}
