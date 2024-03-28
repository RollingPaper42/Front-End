'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AnimationVideo } from '@/component/Common/AnimationVideo';
import HeaderLayout from '@/component/Common/HeaderLayout';
import MainManStrcat from '@/component/MainManStrcat';
import { useLogin } from '@/hooks/useLogin';
import { bodyFontState } from '@/recoil/font/body';
import { titleFontState } from '@/recoil/font/title';
import { logging } from '@/services/mixpanel';
import { focusToHighlight } from '@/utils/focusToHighlight';
import { defaultState } from '@/utils/theme/default';

export default function Home() {
  const [isLogin] = useLogin();
  const router = useRouter();
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    logging('show_main', 'main');
    if (window) setWindowHeight(window.innerHeight);
  }, []);

  const handleClickPersonal = () => {
    logging('click_create_board', 'main');
    if (isLogin) router.push('create', { scroll: false });
    else {
      localStorage.setItem('strcat_login_success_url', '/create');
      router.push('/login');
    }
  };

  const handleClickStart = () => {
    logging('click_guestbook', 'main');
    router.push(
      '/personal/WIncoOMTdNFI0LCNpLfVT0RF3juZV1jsIi-G58nut0yB-kfIRam-XP1JH2Hz9fWU',
    );
  };

  return (
    <>
      <HeaderLayout />
      <div className={` h-auto min-h-full ${defaultState.background}`}>
        <div
          className={`flex ${bodyFontState.serviceBody}  ${defaultState.descriptionText} pl-[24px] pt-[64px]`}
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
              priority
            />
            <div className="absolute top-0">
              <AnimationVideo
                src="/SnowAnimation.webm"
                width={153}
                height={153}
              />
            </div>
          </div>
          <div
            className={`pt-[60px] ${bodyFontState.serviceBody}  text-center  ${defaultState.descriptionText}`}
          >
            내 롤링페이퍼에서 <br /> 친구들의 이야기를 듣고 싶다면
          </div>
          <div
            className={`mt-[16px] flex h-[44px] w-[252px] flex-row items-center select-none cursor-pointer justify-center rounded-[5px] ${defaultState.MiddleButton}`}
            onClick={handleClickPersonal}
          >
            <div className={`${titleFontState.buttonLabel}`}>
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
          <div className="pt-[100px]">
            <div ref={ref} />
            <MainManStrcat />
          </div>
          <div style={{ paddingBottom: `${windowHeight * 0.5}px` }}></div>
          <div className="pb-[100px] flex flex-col items-center justify-center">
            <button
              className="space-x-[8px] bg-strcat-sub w-[231px] h-[52px] rounded-[5px] select-none flex flex-row items-center justify-center"
              onClick={handleClickStart}
            >
              <Image src="/LongCat.svg" width={33} height={24} alt="LongCat" />
              <div
                className={`${defaultState.bottomButtonText} ${bodyFontState.serviceBody}text-strcat-bright-yellow`}
              >
                스트링캣 방명록 남기기
              </div>
            </button>
            <div
              className={`${bodyFontState.serviceSubBody} text-white/50 pt-[12px]`}
            >
              자유롭게 글을 남겨주세요!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
