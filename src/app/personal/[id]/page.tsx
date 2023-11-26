'use client';

import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatBoard from '@/component/StrcatBoard';
import BottomButton from '@/component/BottomButton';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeObj, themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import { observeState } from '@/recoil/observe';
import { useRouter } from 'next/navigation';
import { board } from '@/types/boards';
import { scrollToAdd, setMap } from '@/utils/scrollTo';

export default function Home(props: any) {
  const [board, setBoard] = useState<board>({
    id: 0,
    title: '',
    theme: 'strcat',
    content: [],
  });
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const [theme, setTheme] = useRecoilState(themeState);
  const router = useRouter();
  useEffect(() => {
    axiosInstance
      //.get(`/boards/${props.params.id}`)
      .get(`/api/personal`)
      .then((data) => {
        setBoard(data.data.board);
        setTheme(data.data.board.theme);
        setIsOwner(data.data.isOwner);
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
          themeObj[board.theme].background
        } pb-[500px]`}
      >
        <StrcatBoard
          board={board}
          ref={(node) => setMap(node, board, itemsRef)}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
        />
        {!isAdd &&
          (isOwner ? (
            <div className="sticky bottom-5 z-20 flex w-full">
              <BottomButton
                name="저장"
                width="basis-1/5"
                onClickHandler={() =>
                  router.push(`./${props.params.id}/export`)
                }
                disabled={false}
                color={`bg-white`}
              />
              <BottomButton
                name="공유"
                width="basis-1/5"
                onClickHandler={() =>
                  router.push(`./${props.params.id}/summary`)
                }
                disabled={false}
                color={`bg-strcat-green`}
              />
              <BottomButton
                name="이어서 글쓰기"
                width="basis-3/5"
                onClickHandler={handleClick}
                disabled={!observe.boardId}
                color={`bg-strcat-cyan`}
              />
            </div>
          ) : (
            <div className="sticky bottom-5 z-20 flex w-full">
              <BottomButton
                name="스트링캣 만들기"
                width="basis-1/2"
                onClickHandler={() => router.push(`../create`)}
                disabled={false}
                color={`bg-white`}
              />
              <BottomButton
                name="이어서 글쓰기"
                width="basis-1/2"
                onClickHandler={handleClick}
                disabled={!observe.boardId}
                color={`bg-strcat-cyan`}
              />
            </div>
          ))}
        {!isAdd && <ContentPhoto />}
      </div>
    </>
  );
}
