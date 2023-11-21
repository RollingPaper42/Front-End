'use client';

import Image from 'next/image';

export default function login() {
  const onClickOAuthKakao = () => {
    location.href = `http://${process.env.NEXT_PUBLIC_BACK_SERVER}:8080/oauth2/authorization/kakao`;
  };
  const onClickOAuthGoogle = () => {
    location.href = `http://${process.env.NEXT_PUBLIC_BACK_SERVER}:8080/oauth2/authorization/google`;
  };
  return (
    <div className="bg-strcat-black h-full">
      <div className="mx-6">
        <div>
          ㄴ
          <div className="mt-6 flex w-80 flex-row text-3xl">
            <div className="text-strcat-white text-xl">
              로그인하고 스트링캣을 생성해보세요.
            </div>
          </div>
        </div>
        <div className="relative -z-10 my-20 flex h-96 flex-row items-center justify-center"></div>
        <button className="mt-3 flex h-12 w-full flex-row justify-center rounded-lg bg-yellow-300 ">
          <div className=" basis-3/12"></div>
          <div
            onClick={onClickOAuthKakao}
            className="flex basis-52 flex-row items-center justify-center"
          >
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
        <button className="mt-3 flex h-12 w-full flex-row justify-center rounded-lg bg-neutral-200 ">
          <div className=" basis-3/12"></div>
          <div
            onClick={onClickOAuthGoogle}
            className="flex basis-52 flex-row items-center justify-center"
          >
            <Image
              src="/google.png"
              width={48}
              height={48}
              alt="kakao"
              className="h-12"
            />
            <div className="h-full basis-32 text-left">구글로 시작하기</div>
          </div>
          <div className="basis-3/12"></div>
        </button>
      </div>
    </div>
  );
}
