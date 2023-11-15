'use client';

import StrcatHeader from '@/component/StrcatHeader';
import Image from 'next/image';

export default function login() {
  return (
    <div className="relative m-6">
      <div className="font-FiraCode font-semibold">
        <StrcatHeader />
        <div className="mt-2 flex w-80 flex-row text-3xl">
          <div className="basis-2/12">//</div>
          <div className="basis-5/12">스트링캣</div>
          <div className="basis-3.5/12 bg-red-300">로그인</div>
        </div>
      </div>
      <div className="relative z-10 my-20 flex h-96 flex-row items-center justify-center">
        {/* <Image
                    src="/strcatImage.png"
                    width={170}
                    height={100}
                    alt="strcatImage"
                    className='absolute opacity-10'
                    /> */}
      </div>
      <button className="mt-3 flex h-12 w-full flex-row justify-center rounded-lg bg-yellow-300 ">
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
      <button className="mt-3 flex h-12 w-full flex-row justify-center rounded-lg bg-neutral-200 ">
        <div className=" basis-3/12"></div>
        <div className="flex basis-52 flex-row items-center justify-center">
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
  );
}
