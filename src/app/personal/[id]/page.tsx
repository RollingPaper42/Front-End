'use client';

import { useEffect, useRef, useState } from 'react';
import StrcatBoard from '@/component/StrcatBoard';
import BottomButton from '@/component/BottomButton';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import { observeState } from '@/recoil/observe';
import { useRouter } from 'next/navigation';
import { board } from '@/types/boards';
import { scrollToAdd, setMap } from '@/utils/scrollTo';
import CatAnimation from '@/component/CatAnimation';
import { catAction } from '@/types/animation';
import { useCat } from '@/hooks/useCat';
import { axiosInstance } from '@/utils/axios';
import { useLogin } from '@/hooks/useLogin';
import Loading from '@/component/Loading';
import HeaderLayout from '@/component/HeaderLayout';

export default function Personal({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const itemsRef = useRef(new Map());
  const [observe, setObserve] = useRecoilState(observeState);
  const [theme] = useRecoilState(themeState);
  const router = useRouter();
  const [runCatAnimation] = useCat();
  const [isLogin] = useLogin();

  useEffect(() => {
    axiosInstance
      .get(`/boards/${params.id}`)
      .then((data) => {
        setBoard([data.data.board]);
        setIsOwner(data.data.isOwner);
        if (data.data.board.length) setObserve(data.data.board[0]);
      })
      .catch((err) => {
        if (err.response.status === 406) router.push('/not-found');
      });
  }, [params.id]);

  const handleClick = () => {
    setIsAdd(true);
    scrollToAdd(board[0].id, itemsRef);
  };

  const handleClickCreate = () => {
    if (!isLogin) {
      localStorage.setItem(
        'strcat_login_success_url',
        `/personal/${params.id}`,
      );
      router.push('/login');
    } else {
      router.push('/personal/${params.id}');
    }
  };

  useEffect(() => {
    if (board.length === 1) {
      runCatAnimation('catHeader', catAction.out, 1000, board[0].theme);
      runCatAnimation('strcatCreate', catAction.in, 5000, board[0].theme);
      runCatAnimation('strcatCreate', catAction.sit, 10000, board[0].theme);
    }
  }, [board]);

  return (
    <>
      <div className={` ${theme.background} min-h-full`}>
        <HeaderLayout />
        <CatAnimation />
        <div
          className={`relative w-full py-[24px] text-justify `}
          style={{ paddingBottom: `${window.innerHeight}px` }}
        >
          {board.length ? (
            <StrcatBoard
              board={board[0]}
              ref={(node) => setMap(node, board[0], itemsRef)}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
              isPersonal={true}
              paramsId={params.id}
            />
          ) : (
            <Loading />
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
                    <button
                      className={`relative mx-2 h-[42px] w-full basis-1/2`}
                      onClick={handleClickCreate}
                    >
                      <div
                        className={`absolute top-[3px] h-[39px] w-full ${theme.leftCTA}`}
                      />
                      <div
                        className={`absolute left-[2px] top-0 h-[39px] w-full ${theme.leftCTA}`}
                      />
                      <p className="text-strcat-default-black absolute left-[1px] top-[4px] flex h-[33px] w-full items-center justify-center text-[20px]">
                        스트링캣 만들기
                      </p>
                    </button>
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
