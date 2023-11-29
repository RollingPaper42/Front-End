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
import { axiosInstance } from '@/utils/axios';
import StrcatHeader from '@/component/StrcatHeader';
import { useLogin } from '@/hooks/useLogin';

export default function Personal({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const [theme] = useRecoilState(themeState);
  const router = useRouter();
  const [runCatAnimation] = useCat();
  const [isLogin] = useLogin();

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

  const handleClickCreate = () => {
    if (!isLogin) {
      localStorage.setItem('strcat_login_success_url', `create`);
      router.push('/login');
    } else {
      router.push(`create`);
    }
  };

  useEffect(() => {
    if (board) {
      console.log(board);
      runCatAnimation('catHeader', catAction.out, 1000);
      runCatAnimation('strcatCreate', catAction.sit, 5000);
    }
  }, [board]);

  return (
    <>
      <div className={` h-full ${theme.background}`}>
        <Drawer />
        <StrcatHeader />
        <CatAnimation />
        <div className={`relative w-full  py-[24px] text-justify `}>
          {board.length && (
            <StrcatBoard
              board={board[0]}
              ref={(node) => setMap(node, board[0], itemsRef)}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
              isPersonal={true}
              paramsId={params.id}
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
                    onClickHandler={() => router.push(`${params.id}/export`)}
                    disabled={false}
                    color={`bg-white`}
                  />
                  <BottomButton
                    name="공유"
                    height="h-[42px]"
                    width="basis-1/5"
                    onClickHandler={() => router.push(`${params.id}/summary`)}
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
                      onClickHandler={handleClickCreate}
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
          {!isAdd && <ContentPhoto />}
        </div>
      </div>
    </>
  );
}
