'use client';

import Close from '@/component/Common/Icon/Close';
import { bodyFontState } from '@/recoil/font/body';
import { captionFontState } from '@/recoil/font/caption';
import { headlineFontState } from '@/recoil/font/headline';
import { titleFontState } from '@/recoil/font/title';
import { logging } from '@/services/mixpanel';
import { defaultState } from '@/utils/theme/default';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const handleClickKaKao = () => {
    logging('click_kakao_login', 'login');
    router.replace(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/kakao`,
    );
  };

  const handleClickGoogle = () => {
    logging('click_google_login', 'login');
    router.replace(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/google`,
    );
  };
  return (
    <div className={`h-full w-full ${defaultState.background}`}>
      <div
        className="flex h-[72px] w-full items-center justify-end pr-[24px]"
        onClick={() => router.back()}
      >
        <Close />
      </div>
      <div className="flex w-full flex-col items-center pt-[25%]">
        <Image
          src="/StrcatIcon.svg"
          width={42}
          height={42}
          alt="mainStrcatIcon"
        />
        <div
          className={`py-[11px] ${headlineFontState.headline} font-bold ${defaultState.activateText}`}
        >
          스트링캣
        </div>
        <div
          className={`${bodyFontState.serviceBody} ${defaultState.descriptionText}`}
        >
          함께 문장을 이어가는 롤링페이퍼
        </div>
        <div className="fixed bottom-[12px] w-full max-w-md px-[24px]">
          <button
            className={`flex h-[46px] w-full flex-row items-center justify-center rounded-[6px] ${titleFontState.buttonLabel} font-medium ${defaultState.kakaoButtonBg}`}
            onClick={handleClickKaKao}
          >
            <Image src="/kakao.svg" width={35} height={35} alt="kakao" />
            <div className="">카카오 로그인</div>
          </button>
          <div className="pt-[14px]"></div>
          <button
            className={`flex h-[46px] w-full flex-row items-center justify-center rounded-[6px] ${titleFontState.buttonLabel} font-medium ${defaultState.googleButtonBg}`}
            onClick={handleClickGoogle}
          >
            <Image src="/Google.svg" width={35} height={35} alt="google" />
            <div className="">구글 로그인</div>
          </button>
          <div
            className={`mt-[24px] mb-[16px] px-[24px] ${defaultState.descriptionText} ${captionFontState.themeOption} text-center`}
          >
            로그인을 하시면&nbsp;
            <button
              onClick={() => router.push('/privacy')}
              className="underline"
            >
              개인정보처리방침
            </button>
            과 &nbsp;
            <button onClick={() => router.push('/terms')} className="underline">
              서비스 이용약관
            </button>
            에 동의하시는 것으로 간주됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}
