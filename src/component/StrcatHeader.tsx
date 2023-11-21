'use client';

import useInput from '@/hooks/useInput';
import { drawerState } from '@/recoil/drawer';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';

export default function StrcatHeader() {
  const [isLogin, setIsLogin] = useInput(true);
  const [, setDrawer] = useRecoilState(drawerState);
  // login을 api요청 확인 후 변경

  return (
    <div className="flex h-[56px] flex-row items-center">
      <Link href="/">
        <Image
          src="/StrcatHeader.png"
          width={128}
          height={25}
          alt="StrcatHeader"
        />
      </Link>
      <div className="basis-4/6"></div>
      {isLogin ? (
        <Image
          src="/ProfileImg.svg"
          width={40}
          height={10}
          alt="profileImg"
          onClick={() => setDrawer(true)}
        />
      ) : (
        <Link href="/login">
          <Image
            src="/LoginButton.png"
            width={74}
            height={34}
            alt="StrcatHeader"
          />
        </Link>
      )}
    </div>
  );
}
