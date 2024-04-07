'use client';

import Image from 'next/image';

export default function BottomAnimationImage({
  themeName,
}: {
  themeName: string;
}) {
  return (
    <div className="absolute z-[15] max-w-md w-full">
      <div className="absolute bottom-[22px] right-[24px]">
        <Image
          alt={`sit${themeName}`}
          src={`/cats/${themeName}/sit.gif`}
          width={themeName === 'spring' ? 60.73 : 35}
          height={41}
          className="min-w-[35px] h-[41px]"
          priority
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
