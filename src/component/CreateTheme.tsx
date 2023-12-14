'use client';

import { useState } from 'react';

import BottomButton from './BottomButton';
import Image from 'next/image';

interface CreateThemeProps {
  onClickChris: () => void;
  onClickMas: () => void;
  onClickNight: () => void;
  onClickPeach: () => void;
  onClickLilac: () => void;
  onClickComplete: () => void;
  isPreview: string;
  hidden: string;
}

export default function CreateTheme({
  onClickComplete,
  onClickChris,
  onClickMas,
  onClickNight,
  onClickPeach,
  onClickLilac,
  isPreview,
  hidden,
}: CreateThemeProps) {
  const [isHidden, setIsHidden] = useState(false);
  console.log({ isPreview });
  return (
    <div className={`flex flex-col w-full h-full ${hidden}`}>
      <div className="basis-1/12"></div>
      <div className="basis-3/12">
        <div className=" w-full h-full">
          <div className="mx-[24px] mt-3 ">
            <div className="text-white text-[16px] mb-[16px] font-semibold">
              테마
            </div>
            <div className="flex flex-row w-full h-full">
              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  className="rounded-full w-[45px] h-[45px] bg-red-300  "
                  onClick={onClickChris}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">크리스</div>
              </div>
              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  className="rounded-full bg-red-300 w-[45px] h-[45px] "
                  onClick={onClickMas}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">마스</div>
              </div>

              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  className="rounded-full bg-red-300  w-[45px] h-[45px]"
                  onClick={onClickNight}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">
                  고요한 밤
                </div>
              </div>
              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  className="rounded-full bg-red-300  w-[45px] h-[45px]"
                  onClick={onClickPeach}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">복숭아</div>
              </div>
              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  className="rounded-full bg-red-300 w-[45px] h-[45px] "
                  onClick={onClickLilac}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">라일락</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-6/12 flex flex-col items-center justify-center">
        <div
          className={`w-full h-full  ${
            isPreview === '1' ? 'contents' : 'hidden'
          }`}
        >
          <Image src="/preview/chris.svg" width={270} height={398} alt="1" />
        </div>
        <div
          className={`w-full h-full  ${
            isPreview === '2' ? 'contents' : 'hidden'
          }`}
        >
          <Image src="/preview/mas.svg" width={270} height={398} alt="2" />
        </div>
        <div
          className={`w-full h-full  ${
            isPreview === '3' ? 'contents' : 'hidden'
          }`}
        >
          <Image src="/preview/night.svg" width={270} height={398} alt="3" />
        </div>
        <div
          className={`w-full h-full ${
            isPreview === '4' ? 'contents' : 'hidden'
          }`}
        >
          <Image src="/preview/peach.svg" width={270} height={398} alt="4" />
        </div>
        <div
          className={`w-full h-full ${
            isPreview === '5' ? 'contents' : 'hidden'
          }`}
        >
          <Image src="/preview/lilac.svg" width={270} height={398} alt="5" />
        </div>
      </div>
      <div className="basis-2/12 mx-[24px]  flex  flex-col items-center justify-center">
        <BottomButton
          name="완료"
          width="w-full"
          onClickHandler={onClickComplete}
          disabled={false}
          color="bg-strcat-bright-yellow"
          height="h-[46px]"
          textColor="text-strcat-black"
        />
      </div>
    </div>
  );
}
