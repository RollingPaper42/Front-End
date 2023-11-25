'use client';

import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatBoard from '@/component/StrcatBoard';
import BottomButton from '@/component/BottomButton';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeObj } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import { observeState } from '@/recoil/observe';
import { useRouter } from 'next/navigation';
import { board } from '@/types/boards';
import { scrollToAdd, setMap } from '@/utils/scrollTo';

export default function Home() {
  const [board, setBoard] = useState<board>({
    id: 0,
    title: '',
    theme: 'strcat',
    content: [],
  });
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const router = useRouter();
  useEffect(() => {
    axiosInstance
      .get(`/api/personal`)
      .then((data) => {
        setBoard(data.data);
      })
      .catch((error) => {});
  }, []);

  const handleClick = () => {
    setIsAdd(true);
    scrollToAdd(board.id, itemsRef);
  };

  return (
    <>
      <Drawer />
      <StrcatHeader />
      <div
        className={`relative w-full  p-[24px] text-justify ${
          themeObj[board.theme].BgColor
        } pb-[500px]`}
      >
        <StrcatBoard
          board={board}
          ref={(node) => setMap(node, board, itemsRef)}
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
