'use client';

import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/create');
  };
  return (
    <div>
      <Drawer />
      <StrcatHeader />
      <div className="relative h-screen bg-black">
        <div className=" h-11"></div>
        <Image
          src="/strcatImage.png"
          width={153}
          height={1040}
          alt="Image"
          className=" absolute right-10 top-1/4 -z-0"
        />
        <div className="m-6 text-xl text-white">
          <p>
            // 스트링캣은 문자열을 끝없이 늘려 스크롤을 만들 수 있는 신개념
            롤링페이퍼 서비스 입니다.
          </p>
          <p>소중한 사람에게 스트링캣을 남겨보세요!</p>
        </div>
        <div className=" absolute bottom-36">
          <div className="relative mx-6 text-[22px] text-strcat-green">
            <div onClick={handleClick}>
              <Image
                src="/StrcatMake.png"
                width={150}
                height={37}
                alt="button"
                className="absolute top-0"
              />
              <div className="absolute left-1 top-0 text-[22px] text-black">
                스트링캣 만들기
              </div>
            </div>
            <div className="mt-1 text-[22px] text-strcat-green">
              를 누르면 하나의 문자열을 할당받을 수 있어요. 링크를 공유해
              문자열을 끝없이 이어보세요.
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 ">
          <div className="relative mx-6 text-[22px] text-strcat-blue">
            <div onClick={handleClick}>
              <Image
                src="/GroupStrcatMake.png"
                width={200}
                height={37}
                alt="button"
                className="absolute top-0 mb-2"
              />
              <div className="absolute left-1 top-0 text-[22px] text-black ">
                그룹 스트링캣 만들기
              </div>
            </div>
            <div className="text-[22px] text-strcat-blue">
              &nbsp;를 누르면 여러 문자열을 한 그룹으로 관리할 수 있어요.
              주렁주렁~
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
