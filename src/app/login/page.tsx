'use client';

import Close from '@/component/Icon/Close';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const handleClickKaKao = () => {
    location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/kakao`;
  };

  const handleClickGoogle = () => {
    location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/google`;
  };
  return (
    <div className={`h-full w-full bg-strcat-black `}>
      <div
        className="flex h-[72px] w-full items-center justify-end pr-[24px]"
        onClick={() => router.back()}
      >
        <Close />
      </div>
      <div className="flex w-full flex-col items-center pt-[191px] ">
        <Image
          src="/StrcatIcon.svg"
          width={42}
          height={42}
          alt="mainStrcatIcon"
        />
        <div className=" py-[11px] text-[28px] font-bold text-white">
          스트링캣
        </div>
        <div className=" text-body-size2 text-white opacity-50">
          함께 문장을 이어가는 롤링페이퍼
        </div>
        <div className="fixed bottom-[12px] w-full max-w-md px-[24px] ">
          <button
            className="flex h-[46px] w-full flex-row items-center justify-center rounded-[6px] text-body-size2 font-medium"
            style={{ background: '#FEE500' }}
            onClick={handleClickKaKao}
          >
            <Image src="/kakao.svg" width={35} height={35} alt="kakao" />
            <div className="">카카오 로그인</div>
          </button>
          <div className="pt-[14px]"></div>
          <button
            className="flex h-[46px] w-full flex-row items-center justify-center rounded-[6px] bg-white text-body-size2 font-medium"
            onClick={handleClickGoogle}
          >
            <Image src="/Google.svg" width={35} height={35} alt="google" />
            <div className="">구글 로그인</div>
          </button>
        </div>
      </div>
    </div>
  );
}
