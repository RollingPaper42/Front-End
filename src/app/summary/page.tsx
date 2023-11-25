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
    <div className={`${Theme.BgColor} relative min-h-screen overflow-hidden`}>
      <Link href="/board">
        <Image
          src="/backpage.png"
          width={24}
          height={24}
          alt="backpagebutton"
          className="fixed left-0 top-0 mt-4 "
        />
      </Link>
      <div
        className={`fixed left-32 top-0 basis-8/12 text-center ${Theme.DefaultFontColor}  mt-4`}
      >
        스트링캣 공유하기
      </div>
      <div className={`fixed top-10 m-6 text-xl ${Theme.DefaultFontColor}`}>
        {Title}
      </div>
      <div
        className={`fixed left-6 top-1/4 -z-0 w-40 text-2xl ${Theme.DefaultFontColor} `}
      >
        총 {ContentCount}번의 <br /> 마음으로 <br /> 내 스트링캣이 <br /> 총{' '}
        {ContentTextCount}자 <br /> 이어졌어요!
      </div>
      <Image
        src="/strcatImage.png"
        width={153}
        height={1040}
        alt="Image"
        className=" relative left-40 top-48  -z-0"
      />
    </div>
  );
}
