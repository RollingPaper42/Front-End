'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/StrcatIcon.svg"
        width={42}
        height={42}
        alt="mainStrcatIcon"
      />
      <div className="mt-2 ml-[7px] flex flex-row w-[28px] gap-2">
        <div className="basis-1/3 w-[4px] h-[4px] rounded  bg-strcat-bright-yellow animate-pulse-custom1"></div>
        <div className="basis-1/3 w-[4px] h-[4px] rounded bg-strcat-bright-yellow animate-pulse-custom2"></div>
        <div className="basis-1/3 w-[4px] h-[4px] rounded bg-strcat-bright-yellow animate-pulse-custom3"></div>
      </div>
    </div>
  );
}
