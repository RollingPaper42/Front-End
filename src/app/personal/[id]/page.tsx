'use client';

import { useEffect, useRef, useState } from 'react';
import StrcatBoard from '@/component/StrcatBoard';
import BottomButton from '@/component/BottomButton';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import { observeState } from '@/recoil/observe';
import { useRouter } from 'next/navigation';
import { board } from '@/types/boards';
import { scrollToAdd, setMap } from '@/utils/scrollTo';
import CatAnimation from '@/component/CatAnimation';
import { catAction } from '@/types/animation';
import { useCat } from '@/hooks/useCat';
import ShareButton from '@/component/ShareButton';
import { axiosInstance } from '@/utils/axios';
import StrcatHeader from '@/component/StrcatHeader';

export default function Personal({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const [theme] = useRecoilState(themeState);
  const router = useRouter();
  const [runCatAnimati] = useCat();
  useEffect(() => {
    axiosInstance
      .get(`/boards/${params.id}`)
      // .get(`/api/personal`)
      .then((data) => {
        setBoard([data.data.board]);
        setIsOwner(data.data.isOwner);
      })
      .catch((err) => {});
  }, [params.id]);

  const handleClick = () => {
    setIsAdd(true);
    scrollToAdd(board[0].id, itemsRef);
  };

  useEffect(() => {
    if (board) runCatAnimati('strcatCreate', catAction.sit, 10000);
  }, [board]);

  return (
    <>
      <div className={`h-[100vh] ${theme.background}`}>
        <Drawer />
        <StrcatHeader />
        <CatAnimation />
        <div
          className={`relative w-full  py-[24px] text-justify ${theme.background} pb-[500px]`}
        >
          {board.length && (
            <StrcatBoard
              board={board[0]}
              ref={(node) => setMap(node, board[0], itemsRef)}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
            />
          )}
          {!isAdd &&
            (isOwner ? (
              <div className="fixed bottom-5 left-0 z-20 flex w-full items-center justify-center">
                <div
                  className="flex w-full max-w-md items-center justify-center px-[24px]"
                  id="strcatCreate"
                >
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
                    color={`${theme.leftCTA}`}
                  />
                  <BottomButton
                    name="이어서 글쓰기"
                    height="h-[42px]"
                    width="basis-3/5"
                    onClickHandler={handleClick}
                    disabled={!observe.boardId}
                    color={`${theme.rightCTA}`}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className=" fixed bottom-5 left-0 z-20 flex w-full items-center justify-center">
                  <div
                    className="flex w-full max-w-md items-center justify-center px-[24px] "
                    id="strcatCreate"
                  >
                    <BottomButton
                      name="스트링캣 만들기"
                      height="h-[42px]"
                      width="basis-1/2"
                      onClickHandler={() => router.push(`/create`)}
                      disabled={false}
                      color={`${theme.leftCTA}`}
                    />
                    <BottomButton
                      name="이어서 글쓰기"
                      width="basis-1/2"
                      height="h-[42px]"
                      onClickHandler={handleClick}
                      disabled={!observe.boardId}
                      color={`${theme.rightCTA}`}
                    />
                  </div>
                </div>
              </>
            ))}
          {board.length && !board[0].contents.length && !isAdd && (
            <ShareButton params={params.id} />
          )}
          {!isAdd && <ContentPhoto />}
        </div>
      </div>
    </>
  );
}
