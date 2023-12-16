'use client';

import BottomButton from '../../component/BottomButton';
import { defaultState } from '@/recoil/newtheme/default';
import Image from 'next/image';

interface CreateThemeProps {
  onClickChris: () => void;
  onClickMas: () => void;
  onClickNight: () => void;
  onClickPeach: () => void;
  onClickLilac: () => void;
  isPreview: string;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateTheme({
  setIsNext,
  onClickChris,
  onClickMas,
  onClickNight,
  onClickPeach,
  onClickLilac,
  isPreview,
}: CreateThemeProps) {
  return (
    <div className="flex w-full h-screen flex-col">
      <div className="basis-[56px]"></div>
      <div className="basis-[16px]"></div>
      <div className="basis-[107px]">
        <div className=" h-full w-full">
          <div className="mx-[24px]">
            <div className={`text-[16px] pb-[16px] font-semibold text-white`}>
              테마
            </div>

            <div className="flex h-full w-full flex-row">
              <div className="flex basis-1/5 flex-col items-center">
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
                <div
                  className={`mt-[12px] text-[12px] ${defaultState.activateText}`}
                >
                  크리스
                </div>
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
                <div
                  className={`mt-[12px] text-[12px] ${defaultState.activateText}`}
                >
                  마스
                </div>
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
                <div
                  className={`mt-[12px] text-[12px] ${defaultState.activateText}`}
                >
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
                <div
                  className={`mt-[12px] text-[12px] ${defaultState.activateText}`}
                >
                  복숭아
                </div>
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
                <div
                  className={`mt-[12px] text-[12px] ${defaultState.activateText}`}
                >
                  라일락
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[40px]"></div>
      <div className="flex basis-[485px] flex-col items-center">
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
      <div className=" basis-auto" />
      <div className="fixed bottom-5 flex w-full max-w-md items-center justify-center px-[24px]">
        <BottomButton
          name="다음"
          width="w-full"
          onClickHandler={() => setIsNext(true)}
          disabled={false}
          color={`${defaultState.MiddleButton}`}
          height="h-[46px]"
          textColor={`${defaultState.highLightText}`}
        />
      </div>
    </div>
  );
}
