'use client';

import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatComponent from '@/component/StrcatComponent';
import { content } from '@/types/content';

export default function Home() {
  const [titleData, setTitleData] = useState({});
  const [boardsTitle, setBoardsTitle] = useState([]);
  const [boardsConetent, setBoardsContent] = useState([]);
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
        setTitleData(data.data.titleData);
        setBoardsTitle(data.data.titleData.boards);
        setBoardsContent(data.data.contentData);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className=" w-full p-[24px]">
      <div className="mb-[20px]">
        <h1 className="black text-4xl ">{titleData.title}</h1>
      </div>
      <div>
        {boardsTitle.map((item: { id: number; title: string }) => {
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
