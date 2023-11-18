'use client';

import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';
import { content } from '@/types/content';
import StrcatComponent from '@/component/StrcatComponent';
import PhotoComponent from '@/component/PhotoComponent';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [boardId, setBoardId] = useState(0);
  const [data, setData] = useState<content[] | undefined>(undefined);
  useEffect(() => {
    axiosInstance
      .get(`/api/personal`)
      .then((data) => {
        setBoardId(data.data.board.id);
        setTitle(data.data.board.title);
        setData(data.data.board.content);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className=" relative w-full p-[24px] text-justify">
      <StrcatComponent
        boardId={boardId}
        title={title}
        data={data}
      ></StrcatComponent>
      <PhotoComponent></PhotoComponent>
    </div>
  );
}
