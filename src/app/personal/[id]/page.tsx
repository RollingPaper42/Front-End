'use client';

import { useEffect, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';
import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';

export default function Home(props: any) {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axiosInstance
      .get('/api/text')
      .then((data) => {
        setTitle(data.data.personalData.strcatTitle);
        setData(data.data.personalData.strcatData);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className=" bg-lime-300">
      <div className="p-5">
        <p>{props.params.id}</p>
        <span className="black  text-lg">{title}</span>
      </div>
      <div className=" p-5">
        {data.map((item: any) => {
          return (
            <ObserveComponent
              key={item.id}
              content={item.content}
            ></ObserveComponent>
          );
        })}
      </div>
      <button className=" bg-white p-6">
        <Link href={`strcat/add`}>공유하기</Link>
      </button>
      <button className=" bg-white p-6">
        <Link href={`strcat/export`}>내보내기</Link>
      </button>
    </div>
  );
}
