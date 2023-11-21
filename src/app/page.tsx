'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isLogin, SetIsLogin] = useState(true);
  return (
    <div className="bg-strcat-black">
      <div className="mx-6">
        <div className="text-strcat-white text-xl">
          <div className="text-strcat-white mt-5">
            스트링캣은 문자열을 끝없이 늘려 스크롤을 만들 수 있는 신개념
            롤링페이퍼 서비스 입니다.
          </div>
          <div>소중한 사람에게 스트링캣을 남겨보세요!</div>
        </div>
        <div className="relative z-10 flex h-60 flex-row items-center justify-center"></div>
        <div className="text-strcat-green text-2xl">
          <Link legacyBehavior href={isLogin ? '/create' : '/login'}>
            <a className="bg-strcat-green text-strcat-black m-1">
              스트링캣 만들기
            </a>
          </Link>
          를 누르면 하나의 문자열을 할당받을 수 있어요. 링크를 공유해 문자열을
          끝없이 이어보세요.
        </div>
        <div className="text-strcat-blue text-2xl">
          <Link legacyBehavior href={isLogin ? '/create' : '/login'}>
            <a className="bg-strcat-blue text-strcat-black m-1">
              그룹 스트링캣 만들기
            </a>
          </Link>
          를 누르면 여러 문자열을 한 그룹으로 관리할 수 있어요. 주렁주렁~
        </div>
      </div>
    </div>
  );
}
