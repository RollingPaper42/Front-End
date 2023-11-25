'use client';

import { themeState } from '@/recoil/theme';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import ThemeChange from '@/component/ThemeChange';
import { axiosInstance } from '@/utils/axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
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
    <div className={`${Theme.BgColor}`}>
      <div className="fixed max-w-[calc(100vh*0.6)]">
        <Link href="/board">
          <Image
            src="/backpage.png"
            width={24}
            height={24}
            alt="backpagebutton"
            className="left-[30px] top-[18px] "
          />
        </Link>
        <div className={`top-[20px] mx-[25px]  ${Theme.DefaultFontColor} `}>
          스트링캣 공유하기
        </div>
        <div
          className={`top-[104px] mx-[25px]  text-xl ${Theme.DefaultFontColor}`}
        >
          {Title}
        </div>
        <div
          className={`top-[300px] -z-0   text-2xl ${Theme.DefaultFontColor} `}
        >
          총 {ContentCount}번의 <br /> 마음으로 <br /> 내 스트링캣이 <br /> 총{' '}
          {ContentTextCount}자 <br /> 이어졌어요!
        </div>
      </div>

      <div className="flex flex-row">
        <div className="h-full w-full basis-2/4 bg-red-600"> text </div>
        <div className="flex basis-2/4 content-start justify-start">
          <Image
            src="/strcatImage.png"
            width={153}
            height={1040}
            alt="Image"
            className=" relative  -z-0"
          />
        </div>
      </div>
    </div>
  );
}
