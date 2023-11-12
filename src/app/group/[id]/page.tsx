'use client';

import { useEffect, useRef, useState } from 'react';
import ObserveComponent from '@/component/ObserveComponent';
import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';
import { content } from '@/types/content';

export default function Home() {
  const [titleData, setTitleData] = useState({});
  const [boardsTitle, setBoardsTitle] = useState([]);
  const [boardsConetent, setBoardsContent] = useState([]);
  const [idx, setIdx] = useState(0);
  const ref = useRef();
  useEffect(() => {
    axiosInstance
      .get(`/api/group`)
      .then((data) => {
        setTitleData(data.data.titleData);
        setBoardsTitle(data.data.titleData.boards);
        setBoardsContent(data.data.contentData);
        //console.log(data.data.titleData.boards);
      })
      .catch((error) => {});
  }, []);

  console.log(boardsConetent);
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
            <div key={boards.id}>
              <p>{boards.title}</p>
              <div className="z-0 py-[10%]">
                {boards.content.map((item: content) => {
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
        })}
      </div>
    </div>
  );
}
