'use client';

import { useRef } from 'react';
import { useRecoilState } from 'recoil';

import MainManStrcat from '@/component/MainManStrcat';
import { useLogin } from '@/hooks/useLogin';
import { themeState } from '@/recoil/theme/theme';
import { focusToHighlight } from '@/utils/focusToHighlight';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLogin] = useLogin();
  const [theme] = useRecoilState(themeState);
  const router = useRouter();
  const ref = useRef<HTMLHeadingElement | null>(null);

  const handleClickPersonal = () => {
    if (isLogin) router.push('create');
    else {
      localStorage.setItem('strcat_login_success_url', '/create');
      router.push('/login');
    }
  };

  return (
    <div className={` bg-strcat-black h-auto min-h-full`}>
      <div className="flex flex-col pt-[152px] items-center justify-center">
        <Image
          src="/StrcatIcon.svg"
          width={42}
          height={42}
          alt="mainStrcatIcon"
        />
        <div className=" font-bold text-[28px] py-[11px] text-white">
          스트링캣
        </div>
        <div className=" text-body-size2 text-white opacity-50">
          함께 문장을 이어가는 롤링페이퍼
        </div>
        <div className="pt-[167px]  text-body-size2 text-white opacity-50 text-center">
          내 롤링페이퍼에서 <br /> 친구들의 이야기를 듣고 싶다면
        </div>
        <div className="flex flex-row mt-[16px] w-[252px] h-[44px] bg-strcat-bright-yellow rounded-[5px] justify-center items-center">
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
        <div className="pt-[54px]">
          <Image
            className="animate-bounce"
            src="/IconUnder.svg"
            width={30}
            height={21}
            alt="IconUnder"
            onClick={() => focusToHighlight(ref)}
          />
        </div>
        <div className="pt-[100px] pb-[500px]">
          <div ref={ref} />
          <MainManStrcat />
        </div>
      </div>
    </div>
  );
}
