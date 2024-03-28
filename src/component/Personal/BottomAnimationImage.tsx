'use client';

import Image from 'next/image';

import { AnimationVideo } from '../Common/AnimationVideo';

export default function BottomAnimationImage({
  themeName,
}: {
  themeName: string;
}) {
  return (
    <div className="absolute z-[15] max-w-md w-full">
      <div className="absolute bottom-[22px] right-[24px]">
        <AnimationVideo
          width={35}
          height={41}
          src={`/cats/${themeName}/sit.webm`}
        />
      </div>
      <div className="absolute bottom-[23px] left-[24px]">
        {themeName === 'chris' && (
          <Image
            alt="chrisImage"
            src="/personal/chrisSnowman.svg"
            width={30}
            height={58}
            priority
          />
        )}
        {themeName === 'mas' && (
          <Image
            alt="masImage"
            src="/personal/masTree.svg"
            width={71}
            height={45}
            priority
          />
        )}
      </div>
    </div>
  );
}
