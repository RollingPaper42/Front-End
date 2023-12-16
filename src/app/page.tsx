'use client';

import { useRef } from 'react';

import HeaderLayout from '@/component/HeaderLayout';
import MainManStrcat from '@/component/MainManStrcat';
import { useLogin } from '@/hooks/useLogin';
import { defaultState } from '@/recoil/newtheme/default';
import { focusToHighlight } from '@/utils/focusToHighlight';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLogin] = useLogin();
  const router = useRouter();
  const ref = useRef<HTMLHeadingElement | null>(null);

  const handleClickPersonal = () => {
    if (isLogin) router.push('create', { scroll: false });
    else {
      localStorage.setItem('strcat_login_success_url', '/create');
      router.push('/login');
    }
  };

  return (
    <>
      <HeaderLayout />
      <div className={` h-auto min-h-full ${defaultState.background}`}>
        <div
          className={`flex text-body-size2 ${defaultState.descriptionText} pl-[24px] pt-[64px]`}
        >
          함께 문장을 이어가는 롤링페이퍼
        </div>
        <div className="flex flex-col items-center justify-center pt-[64px]">
          <div className="relative">
            <Image
              src="/MainImage.svg"
              width={153}
              height={153}
              alt="mainStrcatIcon"
            />
            <div className="absolute top-0">
              <Image
                src="/SnowAnimation.gif"
                alt="snowAnimation"
                width={153}
                height={153}
                className="rounded-full"
              />
            </div>
          </div>
          <div
            className={`pt-[60px]  text-center text-body-size2 ${defaultState.descriptionText}`}
          >
            내 롤링페이퍼에서 <br /> 친구들의 이야기를 듣고 싶다면
          </div>
          <div
            className={`mt-[16px] flex h-[44px] w-[252px] flex-row items-center justify-center rounded-[5px] ${defaultState.MiddleButton}`}
          >
            <div
              className=" text-body-size2 font-bold"
              onClick={handleClickPersonal}
            >
              스트링캣 시작하기
            </div>
            <Image
              src="/IconNext.svg"
              width={24}
              height={24}
              alt="mainStrcatIcon"
            />
          </div>
          <div className="cursor-pointer select-none pt-[54px]">
            <Image
              className="h-auto w-auto animate-bounce"
              src="/IconUnder.svg"
              width={30}
              height={21}
              alt="IconUnder"
              onClick={() => focusToHighlight(ref)}
            />
          </div>
          <div className="pb-[312px] pt-[100px]">
            <div ref={ref} />
            <MainManStrcat />
          </div>
          <div className="pb-[100px] flex flex-col items-center justify-center">
            <button
              className="space-x-[8px] bg-strcat-sub w-[231px] h-[52px] rounded-[5px] select-none flex flex-row items-center justify-center"
              onClick={() =>
                router.push(
                  '/personal/WIncoOMTdNFI0LCNpLfVT0RF3juZV1jsIi-G58nut0yB-kfIRam-XP1JH2Hz9fWU',
                )
              }
            >
              <Image src="/LongCat.svg" width={32} height={24} alt="LongCat" />
              <div className=" text-strcat-bright-yellow">
                스트링캣 방명록 남기기
              </div>
            </button>
            <div className="text-white/50 text-[14px] pt-[12px]">
              자유롭게 글을 남겨주세요!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
