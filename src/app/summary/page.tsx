'use client';

import { themeState } from '@/recoil/theme';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import ThemeChange from '@/component/ThemeChange';
import { axiosInstance } from '@/utils/axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BottomButton from '@/component/BottomButton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [Theme, setTheme] = useRecoilState(themeState);
  const params = useParams();
  const [Title, setTitle] = useState(
    '테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다',
  );
  const [ContentCount, setContentCount] = useState('13');
  const [ContentTextCount, setContentTextCount] = useState('1305');

  // useEffect(() => {
  //   axiosInstance
  //     .get(`/boards/${params.id}/summaries`)
  //     .then((data) => {
  //       setTitle(data.data.title);
  //       setContentCount(data.data.contentCount);
  //       setContentTextCount(data.data.contentTextCount);
  //       setTheme(data.data.theme);
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 406) {
  //         alert('올바르지 않은 입력입니다. 다시 작성해주세요.');
  //       }
  //     });
  // }, []);

  return (
    <div className={`${Theme.background}`}>
      <div className=" fixed flex h-full w-full max-w-[calc(100vh*0.6)]  flex-col">
        <div className=" basis-3/12">
          <div className="flex h-full w-full flex-col">
            <div className=" basis-2/5">
              <div className=" flex h-full w-full flex-row">
                <div className=" basis-1/6 items-center justify-center">
                  <Image
                    src="/backpage.png"
                    width={24}
                    height={24}
                    alt="backpagebutton"
                    className="ml-[24px] mt-[16px]"
                  />
                </div>
                <div className=" basis-4/6">
                  <div
                    className={`text-center text-[18px] ${Theme.defaultText} mt-[16px]`}
                  >
                    스트링캣 공유하기
                  </div>
                </div>
                <div className=" basis-1/6"></div>
              </div>
            </div>
            <div className="mx-[25px]  mt-[7px] basis-3/5">
              <div className={`text-[22px] ${Theme.defaultText}`}>{Title}</div>
            </div>
          </div>
        </div>
        <div className=" basis-7/12 ">
          <div className=" flex h-full w-full flex-col ">
            <div className=" basis-1/4"></div>
            <div className=" basis-1/4">
              <div className="flex h-full w-full flex-row">
                <div className="basis-2/3">
                  <div
                    className={`${Theme.defaultText} mx-[24px] text-[26px] `}
                  >
                    총 {ContentCount}번의 <br /> 마음으로 <br /> 내 스트링캣이
                    <br /> 총 {ContentTextCount}자 <br /> 이어졌어요!
                  </div>
                </div>
                <div className="basis-1/3"></div>
              </div>
            </div>
            <div className=" basis-1/4 "></div>
            <div className=" basis-1/4"></div>
          </div>
        </div>
        <div className=" mx-[25px] basis-2/12">
          <div className="flex h-full w-full flex-row items-center justify-center">
            <BottomButton
              height="h-[42px]"
              name="공유하기"
              width="w-[312px]"
              onClickHandler={() => router.push('/create')}
              disabled={false}
              color={`${Theme.rightCTA}`}
            />
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
            className="mr-[24px] mt-[186px]"
          />
        </div>
      </div>
    </div>
  );
}
