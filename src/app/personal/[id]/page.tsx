'use client';

import { useEffect, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';
import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';
import { content } from '@/types/content';
import StrcatComponent from '@/component/StrcatComponent';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<content>([]);
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
      <StrcatComponent title={title} data={data}></StrcatComponent>
      <div className="fixed bottom-5 left-[50%]  mx-0  w-full max-w-[calc(100vh*0.6)] -translate-x-[50%] p-[24px] ">
        <button className=" z-50 h-[48px] w-full bg-[#007afe]   text-[18px]  font-semibold text-white  opacity-100">
          <Link href={`../strcat/add`}>글 작성</Link>
        </button>
      </div>
    </div>
  );
}
