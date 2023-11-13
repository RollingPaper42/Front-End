'use client';

import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatComponent from '@/component/StrcatComponent';
import { board } from '@/types/boards';

export default function Home() {
  const [title, setTitle] = useState<string | null>();
  const [boardsTitle, setBoardsTitle] = useState<board[]>([]);
  const [boardsConetent, setBoardsContent] = useState<board[]>([]);
  // const onHandleClick = (
  //   elementRef: MutableRefObject<HTMLDivElement | null>,
  // ) => {
  //   if (elementRef.current != null) {
  //     const offset = elementRef.current.offsetTop;
  //     window.scrollTo({
  //       top: offset,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  // scroll 이동을 위한 함수
  useEffect(() => {
    axiosInstance
      .get(`/api/group`)
      .then((data) => {
        setTitle(data.data.titleData.title);
        setBoardsTitle(data.data.titleData.boards);
        setBoardsContent(data.data.contentData);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className=" w-full p-[24px]">
      <div className="mb-[20px]">
        <h1 className="black text-4xl ">{title}</h1>
      </div>
      <div>
        {boardsTitle.map((item: board) => {
          return (
            <div key={item.id} className="my-[32px]">
              <p className=" cursor-pointer text-xl">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        {boardsConetent.map((boards) => {
          return (
            <StrcatComponent
              key={boards.id}
              title={boards.title}
              data={boards.content}
            ></StrcatComponent>
          );
        })}
      </div>
    </div>
  );
}
