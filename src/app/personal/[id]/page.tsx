'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import BottomButton from '@/component/BottomButton';
import HeaderLayout from '@/component/HeaderLayout';
import Loading from '@/component/Loading';
import StrcatBoard from '@/component/StrcatBoard';
import { useLogin } from '@/hooks/useLogin';
import { themeState } from '@/recoil/state';
import { board } from '@/types/boards';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';

require('intersection-observer');
export default function Personal({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<board[]>([]);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [theme] = useRecoilState(themeState);
  const router = useRouter();
  const [isLogin] = useLogin();

  useEffect(() => {
    axiosInstance
      .get(`/boards/${params.id}`)
      .then((data) => {
        setBoard([data.data.board]);
        setIsOwner(data.data.isOwner);
      })
      .catch((err) => {
        if (err.response.status === 406) router.push('/not-found');
      });
    if (window) setWindowHeight(window.innerHeight);
  }, [params.id]);

  const handleClickWrite = () => {
    // 글 작성 페이지로 route push
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

  return (
    <>
      <div className={` ${theme.bgTheme.background} min-h-full`}>
        <HeaderLayout />
        <div className={`relative w-full py-[24px] text-justify `}>
          <div className="pt-[200px]"></div>
          {board.length ? <StrcatBoard board={board[0]} /> : <Loading />}
          <div style={{ minHeight: `${windowHeight / 2}px` }}></div>
          {isOwner ? (
            <div className="fixed bottom-5 left-0 z-20 flex w-full items-center justify-center">
              <div className="flex w-full max-w-md items-center justify-center px-[24px]">
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
                  color={`${theme.bgTheme.leftCTA}`}
                />
                <BottomButton
                  name="글쓰기"
                  height="h-[42px]"
                  width="basis-3/5"
                  onClickHandler={handleClickWrite}
                  disabled={false}
                  color={`${theme.bgTheme.rightCTA}`}
                />
              </div>
            </div>
          ) : (
            <>
              <div className=" fixed bottom-5 left-0 z-button flex w-full items-center justify-center">
                <div className="flex w-full max-w-md items-center justify-center px-[24px] ">
                  <BottomButton
                    name="나도 만들기"
                    width="basis-1/2"
                    height="h-[42px]"
                    onClickHandler={handleClickCreate}
                    disabled={false}
                    color={`${theme.bgTheme.leftCTA}`}
                  />
                  <BottomButton
                    name="글쓰기"
                    width="basis-1/2"
                    height="h-[42px]"
                    onClickHandler={handleClickWrite}
                    disabled={false}
                    color={`${theme.bgTheme.rightCTA}`}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
