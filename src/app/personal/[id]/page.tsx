'use client';

import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatBoard from '@/component/StrcatBoard';
import BottomButton from '@/component/BottomButton';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import { observeState } from '@/recoil/observe';
import { useRouter } from 'next/navigation';
import { board } from '@/types/boards';
import { scrollToAdd, setMap } from '@/utils/scrollTo';

export default function Personal({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const [theme, setTheme] = useRecoilState(themeState);
  const router = useRouter();
  useEffect(() => {
    axiosInstance
      .get(`/boards/${params.id}`)
      //.get(`/api/personal`)
      .then((data) => {
        setBoard([data.data.board]);
        setTheme(data.data.board.theme);
        setIsOwner(data.data.isOwner);
      })
      .catch((error) => {});
  }, [setTheme]);

  const handleClick = () => {
    setIsAdd(true);
    scrollToAdd(board[0].id, itemsRef);
  };
  if (!board.length) return null;
  const handleShare = async () => {
    try {
      await navigator.share({
        title: '내 스트링캣 공유하기',
        text: 'strcat을 달아주세요~~',
        url: 'strcat.me',
      });
    } catch (err) {
      console.log(err);
    }
  };
  // 공유하기 기능을 위한 임시 코드입니다.

  return (
    <>
      <Drawer />
      <StrcatHeader />
      <div
        className={`relative w-full  py-[24px] text-justify ${theme.background} pb-[500px]`}
      >
        <StrcatBoard
          board={board[0]}
          ref={(node) => setMap(node, board[0], itemsRef)}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
        />
        {!isAdd &&
          (isOwner ? (
            <div className="fixed bottom-5 left-0 z-50 flex w-full items-center justify-center">
              <div className="flex w-full max-w-md items-center justify-center px-[24px]">
                <BottomButton
                  height="h-[42px]"
                  name="저장"
                  width="basis-1/5"
                  onClickHandler={() => router.push(`./${params.id}/export`)}
                  disabled={false}
                  color={`bg-white`}
                />
                <BottomButton
                  name="공유"
                  height="h-[42px]"
                  width="basis-1/5"
                  onClickHandler={() => router.push(`./${params.id}/summary`)}
                  disabled={false}
                  color={`bg-strcat-green`}
                />
                <BottomButton
                  name="이어서 글쓰기"
                  height="h-[42px]"
                  width="basis-3/5"
                  onClickHandler={handleClick}
                  disabled={!observe.boardId}
                  color={`bg-strcat-cyan`}
                />
              </div>
            </div>
          ) : (
            <>
              <div className=" fixed bottom-0 left-0 z-50 flex w-full items-center justify-center">
                <div className="flex w-full max-w-md items-center justify-center px-[24px] ">
                  <BottomButton
                    name="스트링캣 만들기"
                    height="h-[42px]"
                    width="basis-1/2"
                    onClickHandler={() => router.push(`../create`)}
                    disabled={false}
                    color={`bg-white`}
                  />
                  <BottomButton
                    name="이어서 글쓰기"
                    width="basis-1/2"
                    height="h-[42px]"
                    onClickHandler={handleClick}
                    disabled={!observe.boardId}
                    color={`bg-strcat-cyan`}
                  />
                </div>
              </div>
            </>
          ))}
        {!board[0].contents.length && !isAdd && (
          <div
            className="  h-32 w-32 bg-slate-200"
            onClick={() => handleShare()}
          >
            공유하기
          </div>
        )}
        {!isAdd && <ContentPhoto />}
      </div>
    </>
  );
}
