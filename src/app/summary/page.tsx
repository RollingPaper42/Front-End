'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { content } from '@/types/content';
import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';

export default function Create() {
  const [title, setTitle] = useState<string>('');
  const [contentCount, setContentCount] = useState<number>();
  const [contentTextCount, setContentTextCount] = useState<number>();
  useEffect(() => {
    axiosInstance
      .get(`/boards/Vvs_JTGorbxqVWXr6aH0cg==/contents`)
      .then((data) => {
        setTitle(data.data.board.title);
        setContentCount(data.data.board.contentCount);
        setContentTextCount(data.data.board.contentTextCount);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className={`flex h-screen flex-col bg-black`}>
      <div className=" my-4 flex w-full items-center text-white">
        <Link href="/">
          <div className="ml-7">
            <Image
              src="/backpage.png"
              width={24}
              height={24}
              alt="backpagebutton"
              className=""
            />
          </div>
        </Link>
        <span className="mx-auto">스트링캣 공유하기</span>
        <div className="mr-7 w-6"></div>
      </div>
      <div className="mx-7 my-9 text-lg text-white">
        //최대글자수는ㅁ30.제목을입력해주세요제최대글자수는ㄴ30ㄴ제목
      </div>
      <div className="mx-7 flex flex-row items-center justify-center">
        <div className="basis-1/2 text-sm text-white">
          총 13번의 마음으로 내 스트링캣이 총 1,305자 이어졌어요!
        </div>
        <div className="basis-1/2 text-sm text-white">
          <Image />
        </div>
      </div>
    </div>
  );
}
