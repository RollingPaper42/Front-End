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
}

export default function CreateTheme({
  onClickComplete,
  onClickChris,
  onClickMas,
  onClickNight,
  onClickPeach,
  onClickLilac,
  isPreview,
}: CreateThemeProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="basis-1/12"></div>
      <div className="basis-3/12">
        <div className=" h-full w-full">
          <div className="mx-[24px] mt-3 ">
            <div className="mb-[16px] text-[16px] font-semibold text-white">
              테마
            </div>
            <div className="flex h-full w-full flex-row">
              <div className="flex basis-1/5 flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className={`bg-chris-bg flex h-[45px] w-[45px] flex-col items-center justify-center rounded-full ${
                    isPreview === '1'
                      ? 'ring-white ring-offset-strcat-black ring-2  ring-offset-2'
                      : ''
                  }`}
                  onClick={onClickChris}
                >
                  <Image
                    src="/chrisCat.svg"
                    width={42}
                    height={43}
                    alt="chrisCat"
                    className="z-10 ml-[1px] mt-3"
                  />
                </div>
                <div className="mt-[12px] text-[12px] text-white ">크리스</div>
              </div>
              <div className="flex basis-1/5 flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className={`bg-mas-bg flex h-[45px] w-[45px] flex-col items-center justify-center rounded-full  ${
                    isPreview === '2'
                      ? 'ring-white ring-offset-strcat-black ring-2  ring-offset-2'
                      : ''
                  }`}
                  onClick={onClickMas}
                >
                  <Image
                    src="/masCat.svg"
                    width={42}
                    height={43}
                    alt="chrisCat"
                    className="z-10 mt-[10px]"
                  />
                </div>
                <div className="mt-[12px] text-[12px] text-white">마스</div>
              </div>

              <div className="flex basis-1/5 flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className={`bg-night-bg h-[45px]  w-[45px] rounded-full  ${
                    isPreview === '3'
                      ? 'ring-white ring-offset-strcat-black ring-2  ring-offset-2'
                      : ''
                  }`}
                  onClick={onClickNight}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">
                  고요한 밤
                </div>
              </div>
              <div className="flex basis-1/5 flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className={`bg-peach-bg h-[45px]  w-[45px] rounded-full ${
                    isPreview === '4'
                      ? 'ring-white ring-offset-strcat-black ring-2  ring-offset-2'
                      : ''
                  }`}
                  onClick={onClickPeach}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">복숭아</div>
              </div>
              <div className="flex basis-1/5 flex-col items-center justify-center">
                <div
                  tabIndex={0}
                  className={`bg-lilac-bg h-[45px] w-[45px] rounded-full ${
                    isPreview === '5'
                      ? 'ring-white ring-offset-strcat-black ring-2  ring-offset-2'
                      : ''
                  }`}
                  onClick={onClickLilac}
                ></div>
                <div className="mt-[12px] text-[12px] text-white">라일락</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex basis-6/12 flex-col items-center justify-center">
        <div
          className={`h-full w-full  ${
            isPreview === '1' ? 'contents' : 'hidden'
          }`}
        >
          <Image
            src="/preview/chris.svg"
            width={270}
            height={398}
            alt="크리스"
            className="h-[398px] w-[270px] drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)]"
          />
        </div>
        <div
          className={`h-full w-full  ${
            isPreview === '2' ? 'contents' : 'hidden'
          }`}
        >
          <Image
            src="/preview/mas.svg"
            width={270}
            height={398}
            alt="마스"
            className="h-[398px] w-[270px] drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)]"
          />
        </div>
        <div
          className={`h-full w-full  ${
            isPreview === '3' ? 'contents' : 'hidden'
          }`}
        >
          <Image
            src="/preview/night.svg"
            width={270}
            height={398}
            alt="고요한밤"
            className="h-[398px] w-[270px] drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)]"
          />
        </div>
        <div
          className={`h-full w-full ${
            isPreview === '4' ? 'contents' : 'hidden'
          }`}
        >
          <Image
            src="/preview/peach.svg"
            width={270}
            height={398}
            alt="복숭아"
            className="h-[398px] w-[270px] drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)]"
          />
        </div>
        <div
          className={`h-full w-full ${
            isPreview === '5' ? 'contents' : 'hidden'
          } drop-shadow`}
        >
          <Image
            src="/preview/lilac.svg"
            width={270}
            height={398}
            alt="라일락"
            className="h-[398px] w-[270px] drop-shadow-[0px_0px_15px_rgba(255,255,255,0.3)]"
          />
        </div>
      </div>
      <div className="mx-[24px] flex  basis-2/12  flex-col items-center justify-center">
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
