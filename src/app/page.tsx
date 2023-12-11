'use client';

import { useRecoilState } from 'recoil';

import HeaderLayout from '@/component/HeaderLayout';
import LongCat from '@/component/Icon/LongCat';
import { useLogin } from '@/hooks/useLogin';
import { titleFont } from '@/recoil/font';
import { themeState } from '@/recoil/theme/theme';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLogin] = useLogin();
  const [theme] = useRecoilState(themeState);
  const router = useRouter();

  const handlePersonalStrcat = () => {
    if (isLogin) router.push('create');
    else {
      localStorage.setItem('strcat_login_success_url', '/create');
      router.push('/login');
    }
  };

  const handleGroupStrcat = () => {
    if (isLogin) router.push('create/group');
    else {
      localStorage.setItem('strcat_login_success_url', '/create/group');
      router.push('/login');
    }
  };

  return (
    <div className={`${theme.bgTheme.background}`}>
      <HeaderLayout />
      <div className=" fixed flex h-full w-full max-w-md  flex-col">
        <div className="basis-1/12"></div>
        <div className="basis-6/12">
          <div
            className={`mx-[24px] mt-[25px] ${titleFont.category2} ${theme.textTheme.default}`}
          >
            <p>
              {`\/\/ 스트링캣은 문자열을 끝없이 늘려 스크롤을 만들 수 있는 신개념
              롤링페이퍼 서비스 입니다.`}
            </p>
            <p>소중한 사람에게 스트링캣을 남겨보세요!</p>
          </div>
        </div>
        <div className="basis-5/12">
          <div className=" flex h-full w-full flex-col">
            <div
              className={`mx-[24px] mt-[100px] inline basis-1/2 ${titleFont.category1}`}
            >
              <div className="inline">
                <button
                  className={`relative h-[33px] w-[150px] items-center ${theme.bgTheme.leftCTA} ${titleFont.category1}`}
                  onClick={handlePersonalStrcat}
                >
                  <div
                    className={`relative bottom-[4.5px] left-[2px] h-[33px] w-[150px] ${titleFont.category1} ${theme.bgTheme.leftCTA}`}
                  >
                    <div className=" bottom-[-4.5px] left-[-2px]">
                      <div className="relative top-1 select-none">
                        스트링캣 만들기
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={`inline ${theme.textTheme.explainLeftCTA}`}>
                &nbsp;를 누르면 하나의 문자열을 할당받을 수 있어요. 링크를
                공유해 문자열을 끝없이 이어보세요.
              </div>
            </div>
            <div
              className={`mx-[24px] inline basis-1/2 ${titleFont.category1}`}
            >
              <div className="inline">
                <button
                  className={`relative h-[33px] w-[200px] items-center ${theme.bgTheme.rightCTA} ${titleFont.category1}`}
                  onClick={handleGroupStrcat}
                >
                  <div
                    className={`relative bottom-[4.5px] left-[2px] h-[33px]  w-[200px] ${titleFont.category1} ${theme.bgTheme.rightCTA}`}
                  >
                    <div className="relative top-1 select-none">
                      그룹 스트링캣 만들기
                    </div>
                    <div className=" bottom-[-4.5px] left-[-2px]"></div>
                  </div>
                </button>
              </div>
              <div
                className={`inline ${titleFont.category1} ${theme.textTheme.explainRightCTA}`}
              >
                &nbsp;를 누르면 여러 문자열을 한 그룹으로 관리할 수 있어요.
                주렁주렁~
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-row">
        <div className="basis-1/2"></div>
        <div className="basis-1/2 pr-[24px] pt-[228px]">
          <LongCat
            bodyColor={theme.catTheme.mainCat}
            eyeColor={theme.catTheme.mainCatEye}
          />
        </div>
      </div>
    </div>
  );
}
