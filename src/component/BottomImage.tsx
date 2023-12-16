'use client';

import Image from 'next/image';

export default function BottomAnimationImage({
  themeName,
}: {
  themeName: string;
}) {
  return (
    <div className={`absolute z-[15]  max-w-md w-full`}>
      <div className=" absolute  bottom-[23px] right-[24px]">
        <Image
          alt={`${themeName} sit`}
          src={`/cats/${themeName}/sit.gif`}
          width={33}
          height={34}
        />
      </div>
      {themeName === 'chris' && (
        <div className=" absolute bottom-[23px] left-[24px]">
          <Image
            alt="chris Image"
            src={`/theme/chris.svg`}
            width={30}
            height={50}
          />
        </div>
      )}
      {themeName === 'mas' && (
        <div className=" absolute bottom-[23px] left-[24px]">
          <Image
            alt="mas Image"
            src={`/theme/mas.svg`}
            width={71}
            height={46}
          />
        </div>
      )}
    </div>
  );
}
