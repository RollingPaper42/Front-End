'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import NoneContent from './NoneContent';
import SnowAnimation from './SnowAnimation';
import Summary from './Summary';
import BottomButton from '@/component/BottomButton';
import Loading from '@/component/Loading';
import StrcatBoard from '@/component/StrcatBoard';
import { useLogin } from '@/hooks/useLogin';
import { useScroll } from '@/hooks/useScroll';
import { themeState, titleState } from '@/recoil/state';
import { board } from '@/types/boards';
import { axiosInstance } from '@/utils/axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

require('intersection-observer');
export default function Personal({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<board[]>([]);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [theme] = useRecoilState(themeState);
  const router = useRouter();
  const [isLogin] = useLogin();
  const [, setTitle] = useRecoilState(titleState);
  const { isHidden, setIsHidden } = useScroll();

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

  useEffect(() => {
    if (!board.length) return;
    setTitle(board[0].title);
  }, [board]);

  const handleClickWrite = () => {
    router.push(`${params.id}/add`);
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
      <div
        className={`${theme.bgTheme.background} min-h-full`}
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <SnowAnimation />
        {board.length ? (
          <div className="z-text relative">
            {board[0].contents.length !== 0 && (
              <div className="absolute top-[100px]">
                <Summary id={params.id} />
              </div>
            )}
            <div style={{ paddingTop: `${windowHeight * 0.4}px` }} />
            {board[0].contents.length === 0 && (
              <NoneContent handleClickNoneContent={handleClickWrite} />
            )}
            <StrcatBoard board={board[0]} />
          </div>
        ) : (
          <Loading />
        )}
        <div style={{ minHeight: `${windowHeight * 0.6}px` }}></div>
        {isOwner ? (
          <div
            className={`fixed bottom-0 pb-[12px] left-0 z-button flex w-full items-center justify-center transition-transform duration-300 ${
              isHidden ? 'translate-y-full' : 'translate-y-0'
            }`}
          >
            <div className="flex w-full max-w-md items-center justify-center px-[24px] space-x-[12px]">
              <div className="flex basis-1/12 items-center justify-center">
                <div
                  className={`h-[46px] flex rounded-[5px] w-[46px] justify-center items-center ${theme.bgTheme.leftCTA}`}
                >
                  <Image
                    src="/Download.svg"
                    width={24}
                    height={24}
                    alt="Download"
                  />
                </div>
              </div>
              <BottomButton
                textColor="text-strcat-bright-yellow"
                name="공유하기"
                height="h-[46px]"
                width="basis-5/12"
                onClickHandler={() => router.push(`${params.id}/summary`)}
                disabled={false}
                color={`${theme.bgTheme.leftCTA}`}
              />
              <BottomButton
                textColor="text-strcat-bright-yellow"
                name="글쓰기"
                height="h-[46px]"
                width="basis-5/12"
                onClickHandler={handleClickWrite}
                disabled={false}
                color={`${theme.bgTheme.rightCTA}`}
              />
            </div>
          </div>
        ) : (
          <>
            <div
              className={`fixed bottom-0 pb-[12px] left-0 z-button flex w-full items-center justify-center transition-transform duration-300 ${
                isHidden ? 'translate-y-full' : 'translate-y-0'
              }`}
            >
              <div className="flex w-full max-w-md items-center justify-center px-[24px] space-x-[12px] ">
                <BottomButton
                  textColor=" text-strcat-white2"
                  name="나도 만들기"
                  width="basis-1/3"
                  height="h-[46px]"
                  onClickHandler={handleClickCreate}
                  disabled={false}
                  color={`${theme.bgTheme.leftCTA}`}
                />
                <BottomButton
                  textColor=" text-strcat-bright-yellow"
                  name="글쓰기"
                  width="basis-2/3"
                  height="h-[46px]"
                  onClickHandler={handleClickWrite}
                  disabled={false}
                  color={`${theme.bgTheme.rightCTA}`}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
