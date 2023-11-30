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
          <div
            className="h-[45px] w-full rounded-lg bg-yellow-300  "
            onClick={onClickOAuthKakao}
          >
            <div className="flex h-full w-full flex-row">
              <div className="basis-2/12">
                <Image src="/kakao.svg" width={48} height={48} alt="kakao" />
              </div>
              <div className="mt-[12px] basis-8/12 select-none text-center text-[16px]">
                카카오 시작하기
              </div>
              <div className="basis-2/12"></div>
            </div>
          </div>
          <div
            className="mt-[22px] h-[45px] w-full rounded-lg bg-neutral-200  "
            onClick={onClickOAuthGoogle}
          >
            <div className="flex h-full w-full flex-row">
              <div className="basis-2/12">
                <Image src="/Google.svg" width={48} height={48} alt="google" />
              </div>
              <div className="mt-[12px] basis-8/12 select-none text-center text-[16px]">
                구글 시작하기
              </div>
              <div className="basis-2/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
