'use client';

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
                  tabIndex={0}
                  className="rounded-full w-[45px] flex flex-col items-center justify-center h-[45px] border-2 outline bg-chris-bg  outline-chris-bg border-chris-bg active:border-line-in active:outline-white focus:border-line-in focus:outline-white"
                  onClick={onClickChris}
                >
                  <Image
                    src="/chrisCat.svg"
                    width={42}
                    height={43}
                    alt="chrisCat"
                    className="mt-3 ml-[1px] z-10"
                  />
                </div>
                <div className="mt-[12px] text-[12px] text-white ">크리스</div>
              </div>
              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className="rounded-full flex flex-col items-center justify-center bg-mas-bg w-[45px] h-[45px] border-2 outline outline-mas-bg border-mas-bg active:border-line-in active:outline-white focus:border-line-in focus:outline-white  "
                  onClick={onClickMas}
                >
                  <Image
                    src="/masCat.svg"
                    width={42}
                    height={43}
                    alt="chrisCat"
                    className="mt-[10px] z-10"
                  />
                </div>
                <div className="mt-[12px] text-[12px] text-white">마스</div>
              </div>

              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className="rounded-full bg-night-bg  w-[45px] h-[45px] border-2 outline outline-night-bg border-night-bg active:border-line-in active:outline-white focus:border-line-in focus:outline-white "
                  onClick={onClickNight}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">
                  고요한 밤
                </div>
              </div>
              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className="rounded-full bg-peach-bg  w-[45px] h-[45px] border-2 outline outline-peach-bg border-peach-bg active:border-line-in active:outline-white focus:border-line-in focus:outline-white "
                  onClick={onClickPeach}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">복숭아</div>
              </div>
              <div className="basis-1/5 flex flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className="rounded-full bg-lilac-bg w-[45px] h-[45px] border-2 outline outline-lilac-bg border-lilac-bg active:border-line-in active:outline-white focus:border-line-in focus:outline-white  "
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
          <Image
            src="/preview/christ.svg"
            width={270}
            height={398}
            alt="1"
            className="drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-[270px] h-[398px]"
          />
        </div>
        <div
          className={`w-full h-full  ${
            isPreview === '2' ? 'contents' : 'hidden'
          }`}
        >
          <Image
            src="/preview/mas.svg"
            width={270}
            height={398}
            alt="2"
            className="drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-[270px] h-[398px]"
          />
        </div>
        <div
          className={`w-full h-full  ${
            isPreview === '3' ? 'contents' : 'hidden'
          }`}
        >
          <Image
            src="/preview/night.svg"
            width={270}
            height={398}
            alt="3"
            className="drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-[270px] h-[398px]"
          />
        </div>
        <div
          className={`w-full h-full ${
            isPreview === '4' ? 'contents' : 'hidden'
          }`}
        >
          <Image
            src="/preview/peach.svg"
            width={270}
            height={398}
            alt="4"
            className="drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-[270px] h-[398px]"
          />
        </div>
        <div
          className={`w-full h-full ${
            isPreview === '5' ? 'contents' : 'hidden'
          } drop-shadow`}
        >
          <Image
            src="/preview/lilac.svg"
            width={270}
            height={398}
            alt="5"
            className="drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-[270px] h-[398px]"
          />
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
