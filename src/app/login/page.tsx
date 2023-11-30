'use client';

import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import Image from 'next/image';
import { themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';

export default function Login() {
  const [theme, setTheme] = useRecoilState(themeState);
  const onClickOAuthKakao = () => {
    location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/kakao`;
  };

  const onClickOAuthGoogle = () => {
    location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/google`;
  };
  return (
    <div className={`h-full w-full ${theme.background}`}>
      <div className="flex h-full w-full flex-col">
        <div className="basis-1/12">
          <Drawer />
          <StrcatHeader />
        </div>
        <div className="basis-2/12">
          <div
            className={`mx-[24px] mt-[40px] h-full text-[20px] ${theme.defaultText}`}
          >
            <div>{`\/\/ 로그인하고 스트링캣을 생성해보세요.`}</div>
          </div>
        </div>
        <div className="basis-9/12"></div>
        <div className="mx-[24px] basis-3/12">
          <div className="mt-[10px]">
            <button
              className={`relative h-[45px] w-full`}
              onClick={onClickOAuthKakao}
            >
              <Image
                src="/kakao.svg"
                width={48}
                height={48}
                alt="kakao"
                className="relative bottom-1 z-10"
              />
              <div
                className={`bg-login-button-kakao absolute top-[3px] h-[39px] w-full`}
              />
              <div
                className={`bg-login-button-kakao absolute left-[2px] top-0 h-[39px] w-full`}
              />
              <div className="absolute left-[1px] top-[4px] flex h-[16px] w-full items-center justify-center text-[16px] text-strcat-default-black">
                <div className="relative top-2">카카오 로그인</div>
              </div>
            </button>
          </div>
          <div className="mt-[12px]">
            <button
              className={`relative h-[45px] w-full`}
              onClick={onClickOAuthGoogle}
            >
              <Image
                src="/Google.svg"
                width={48}
                height={48}
                alt="google"
                className="relative bottom-1 z-10"
              />
              <div
                className={`bg-login-button-google absolute top-[3px] h-[39px] w-full`}
              />
              <div
                className={`bg-login-button-google absolute left-[2px] top-0 h-[39px] w-full`}
              />
              <div className="absolute left-[1px] top-[4px] flex h-[16px] w-full items-center justify-center text-[16px] text-strcat-default-black">
                <div className="relative top-2">구글 로그인</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
