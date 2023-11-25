'use client';

import { useEffect, useState, useRef } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatBoard from '@/component/StrcatBoard';
import { board } from '@/types/boards';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';

export default function Home() {
  const [title, setTitle] = useState<string | null>();
  const [boardsTitle, setBoardsTitle] = useState<board[]>([]);
  const [boardsConetent, setBoardsContent] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [theme] = useRecoilState(themeState);
  const itemsRef = useRef(new Map());
  const scrollToId = (itemId: number) => {
    const map = getMap();
    const node = map.get(itemId);
    const offset = node.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };
  const getMap = () => {
    return itemsRef.current;
  };
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
    <>
      <Drawer />
      <StrcatHeader />
      <div className={`relative w-full p-[24px] ${theme.background}`}>
        <div className="mb-[20px]">
          <h1 className={`${theme.defaultText} text-4xl`}>{title}</h1>
        </div>
        <div>
          {boardsTitle.map((board: board) => {
            return (
              <div
                key={board.id}
                className="my-[32px]"
                onClick={() => scrollToId(board.id)}
              >
                <p className={`cursor-pointer text-xl ${theme.defaultText}`}>
                  {board.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" mb-[500px] text-justify">
          {boardsConetent.map((board) => {
            return (
              <StrcatBoard
                isAdd={isAdd} //그룹페이지에서 글작성버튼은 설정되지않은 상태인데, 타입에러 방지를 위해 일단 추가하였습니다
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(board.id, node);
                  } else {
                    map.delete(board.id);
                  }
                }}
                key={board.id}
                boardId={board.id}
                title={board.title}
                data={board.content}
              />
            );
          })}
        </div>
        <ContentPhoto />
      </div>
    </>
  );
}
