'use client';

import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import Image from 'next/image';

export default function login() {
  const onClickOAuthKakao = () => {
    location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/kakao`;
  };

  const onClickOAuthGoogle = () => {
    location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/google`;
  };
  return (
    <>
      <Drawer />
      <StrcatHeader />
      <div className="relative m-6">
        <div className="mt-2 flex w-80 flex-row text-3xl">
          <div className="basis-2/12">{`//`}</div>
          <div className="basis-5/12">스트링캣</div>
          <div className="basis-3.5/12 bg-red-300">로그인</div>
        </div>
        <div className="relative z-10 my-20 flex h-96 flex-row items-center justify-center"></div>
        <button
          className="mt-3 flex h-12 w-full flex-row justify-center rounded-lg bg-yellow-300  "
          onClick={onClickOAuthKakao}
        >
          <div className=" basis-3/12"></div>
          <div className="flex basis-52 flex-row items-center justify-center">
            <Image
              src="/kakao.png"
              width={48}
              height={48}
              alt="kakao"
              className="h-12"
            />
            <div className="h-full basis-32 text-left">카카오로 시작하기</div>
          </div>
          <div className="basis-3/12"></div>
        </button>
        <button
          className="mt-3 flex h-12 w-full flex-row justify-center rounded-lg bg-neutral-200 "
          onClick={onClickOAuthGoogle}
        >
          <div className=" basis-3/12"></div>
          <div className="flex basis-52 flex-row items-center justify-center">
            <Image
              src="/google.png"
              width={48}
              height={48}
              alt="kakao"
              className="h-12"
              onClick={onClickOAuthGoogle}
            />
            <div className="h-full basis-32 text-left">구글로 시작하기</div>
          </div>
          <div className="basis-3/12"></div>
        </button>
      </div>
    </>
  );
}
