'use client';

import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { themeState } from '@/recoil/theme';
import { useRecoilState } from 'recoil';
import { useLogin } from '@/hooks/useLogin';

export default function Home() {
  const [isLogin] = useLogin();
  const [Theme, SetTheme] = useRecoilState(themeState);
  const router = useRouter();
  return (
    <div className={`${Theme.background}`}>
      <div className=" fixed flex h-full w-full max-w-[calc(100vh*0.6)]  flex-col">
        <div className="basis-1/12">
          <Drawer />
          <StrcatHeader />
        </div>
        <div className="basis-6/12">
          <div
            className={`mx-[24px] mt-[46px] text-[20px] ${Theme.defaultText}`}
          >
            <p>
              {`// 스트링캣은 문자열을 끝없이 늘려 스크롤을 만들 수 있는 신개념
              롤링페이퍼 서비스 입니다.`}
            </p>
            <p>소중한 사람에게 스트링캣을 남겨보세요!</p>
          </div>
        </div>
        <div className="basis-5/12">
          <div className=" flex h-full w-full flex-col">
            <div className="mx-[24px] mt-[100px] inline basis-1/2 text-[22px]">
              <div className="inline">
                <button
                  className={`relative h-[33px] w-[150px] items-center ${Theme.leftCTA} text-[22px]`}
                  onClick={() =>
                    isLogin ? router.push('/create') : router.push('/login')
                  }
                >
                  <div
                    className={`relative bottom-[4.5px] left-[2px] h-[33px] w-[150px] text-[22px] ${Theme.leftCTA}`}
                  >
                    <div className=" bottom-[-4.5px] left-[-2px]">
                      스트링캣 만들기
                    </div>
                  </div>
                </button>
              </div>
              <div className="text-strcat-default-green inline">
                &nbsp;를 누르면 하나의 문자열을 할당받을 수 있어요. 링크를
                공유해 문자열을 끝없이 이어보세요.
              </div>
            </div>
            <div className="mx-[24px] inline basis-1/2 text-[22px]">
              <div className="inline">
                <button
                  className={`relative h-[33px] w-[200px] items-center ${Theme.rightCTA} text-[22px]`}
                  onClick={() =>
                    isLogin ? router.push('/create') : router.push('/login')
                  }
                >
                  <div
                    className={`relative bottom-[4.5px] left-[2px] h-[33px]  w-[200px] text-[22px] ${Theme.rightCTA}`}
                  >
                    그룹 스트링캣 만들기
                    <div className=" bottom-[-4.5px] left-[-2px]"></div>
                  </div>
                </button>
              </div>
              <div className="text-strcat-default-cyan inline text-[22px]">
                &nbsp;를 누르면 여러 문자열을 한 그룹으로 관리할 수 있어요.
                주렁주렁~
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-row">
        <div className="basis-1/2"></div>
        <div className="basis-1/2">
          <Image
            src="/strcatImage.png"
            width={153}
            height={1040}
            alt="Image"
            className="mr-[24px] mt-[228px]"
          />
        </div>
      </div>
    </div>
  );
}
