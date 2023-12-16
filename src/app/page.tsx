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
        <div className="flex flex-col items-center justify-center pt-[152px]">
          <div className="relative">
            <Image
              src="/MainImage.png"
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
            className={`py-[11px] text-[28px] font-bold ${defaultState.activateText}`}
          >
            스트링캣
          </div>
          <div className={`text-body-size2 ${defaultState.descriptionText}`}>
            함께 문장을 이어가는 롤링페이퍼
          </div>
          <div
            className={`pt-[167px]  text-center text-body-size2 ${defaultState.descriptionText}`}
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
          <div className="pb-[500px] pt-[100px]">
            <div ref={ref} />
            <MainManStrcat />
          </div>
        </div>
      </div>
    </>
  );
}
