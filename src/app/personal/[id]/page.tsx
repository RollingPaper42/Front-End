'use client';

import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import { content } from '@/types/content';
import StrcatBoard from '@/component/StrcatBoard';
import Add from '@/component/Add';
import BottomButton from '@/component/BottomButton';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeObj, themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import { observeState } from '@/recoil/observe';
import { useRouter } from 'next/navigation';
import { board } from '@/types/boards';

export default function Home() {
  const [boards, setBoards] = useState<board>({
    id: 0,
    title: '',
    theme: 'strcat',
    content: [],
  });
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const router = useRouter();

  const scrollToId = (itemId: number) => {
    const map = getMap();
    const node = map.get(itemId);
    const height = node.offsetHeight;
    const offset = node.offsetTop + height - 500; // 하단의 여백을 500만큼 줬으므로 그만큼 빼준다.
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };
  const getMap = () => {
    return itemsRef.current;
  };
  useEffect(() => {
    axiosInstance
      .get(`/api/personal`)
      .then((data) => {
        setBoards(data.data);
      })
      .catch((error) => {});
  }, []);

  const handleClick = () => {
    setIsAdd(true);
    scrollToId(boardId);
  };

  return (
    <>
      <Drawer />
      <StrcatHeader />
      <div
        className={`relative w-full  p-[24px] text-justify ${
          themeObj[boards.theme].BgColor
        } pb-[500px]`}
      >
        <StrcatBoard
          theme={boards.theme}
          ref={(node) => {
            const map = getMap();
            if (node) {
              map.set(boards.id, node);
            } else {
              map.delete(boards.id);
            }
          }}
          boardId={boards.id}
          title={boards.title}
          data={boards.content}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
        />
        {!isAdd && (
          <div className="sticky bottom-5 flex w-full">
            <BottomButton
              name="저장"
              width="basis-1/5"
              onClickHandler={() => router.push('./export')}
              disabled={false}
              color={`bg-white`}
            />
            <BottomButton
              name="공유"
              width="basis-1/5"
              onClickHandler={() => router.push('./summary')}
              disabled={false}
              color={`bg-strcat-green`}
            />
            <BottomButton
              name="글 작성"
              width="basis-3/5"
              onClickHandler={handleClick}
              disabled={!observe.boardId}
              color={`bg-strcat-cyan`}
            />
          </div>
        )}
        {!isAdd && <ContentPhoto />}
      </div>
    </>
  );
}
