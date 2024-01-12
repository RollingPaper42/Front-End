import Image from 'next/image';
import Link from 'next/link';

import { bodyFontState } from '@/recoil/font/body';
import { titleFontState } from '@/recoil/font/title';
import { defaultState } from '@/utils/theme/default';

export default function NotFound() {
  return (
    <div className={` w-full h-full ${defaultState.background}`}>
      <div className="flex w-full h-full flex-col items-center justify-center">
        <Image src="404cat.svg" width={33} height={38} alt="404cat" />
        <div
          className={`pt-[28px] ${titleFontState.titleLabel} ${defaultState.activateText}`}
        >
          페이지를 찾다 길을 잃었어요 😥
        </div>
        <div
          className={`pt-[8px] ${bodyFontState.serviceSubBody} ${defaultState.descriptionText} text-center`}
        >
          입력하신 주소가 정확한지 <br /> 다시 확인해주세요.
        </div>
        <div
          className={`flex flex-col mt-[32px] h-[46px] w-[150px] rounded-[5px] text-center justify-center ${defaultState.middleDisable}`}
        >
          <button
            className={`${titleFontState.buttonLabel} ${defaultState.activateText}`}
          >
            <Link href={'/'}>홈으로</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
