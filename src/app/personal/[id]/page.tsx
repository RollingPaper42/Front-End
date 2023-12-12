'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import NoneContent from './NoneContent';
import Summary from './Summary';
import BottomButton from '@/component/BottomButton';
import Loading from '@/component/Loading';
import StrcatBoard from '@/component/StrcatBoard';
import { useLogin } from '@/hooks/useLogin';
import { themeState } from '@/recoil/state';
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
      <div className={`${theme.bgTheme.background} min-h-full`}>
        {board.length ? (
          <>
            <div className="pt-[100px]" />
            {board[0].contents.length !== 0 && <Summary id={params.id} />}
            <div className="pt-[150px]" />
            {board[0].contents.length === 0 && (
              <NoneContent handleClickNoneContent={handleClickWrite} />
            )}
            <StrcatBoard board={board[0]} />
          </>
        ) : (
          <Loading />
        )}
        <div style={{ minHeight: `${windowHeight}px` }}></div>
        {isOwner ? (
          <div className="fixed bottom-5 left-0 z-20 flex w-full items-center justify-center">
            <div className="flex w-full max-w-md items-center justify-center px-[24px]">
              <div className="flex basis-1/12 mx-1 items-center justify-center">
                <div
                  className={`h-[46px] flex rounded w-[46px] justify-center items-center ${theme.bgTheme.leftCTA}`}
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
            <div className=" fixed bottom-5 left-0 z-20 flex w-full items-center justify-center">
              <div className="flex w-full max-w-md items-center justify-center px-[24px] ">
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
