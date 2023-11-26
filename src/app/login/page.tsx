'use client';

import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import Image from 'next/image';
import { themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';

export default function login() {
  const [theme, setTheme] = useRecoilState(themeState);
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
      <div className={`h-full w-full ${theme.background}`}>
        <div className="flex h-full w-full flex-col">
          <div className="basis-2/12">
            <div
              className={`mx-[24px] mt-[40px] h-full text-[20px] ${theme.defaultText}`}
            >
              <div>로그인하고 스트링캣을 생성해보세요.</div>
            </div>
          </div>
          <div className="basis-6/12"></div>
          <div className="mx-[24px] basis-4/12">
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
                <div className="h-full basis-32 text-left">
                  카카오로 시작하기
                </div>
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
        </div>
      </div>
    </>
  );
}
