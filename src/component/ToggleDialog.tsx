import { useState } from 'react';

import BottomButton from './Common/BottomButton';
import { bodyFontState } from '@/recoil/font/body';
import { titleFontState } from '@/recoil/font/title';

interface Props {
  resolve: (value: boolean | PromiseLike<boolean>) => void;
  closeModal: () => void;
  title: string;
  description: string;
}

export default function ToggleDialog({
  resolve,
  title,
  description,
  closeModal,
}: Props) {
  const [isPublic, setIsPublic] = useState(false);
  return (
    <div className="relative w-[280px] rounded-[16px] bg-strcat-textarea-bg px-[16px] pb-[16px] pt-[32px] font-medium shadow-[0px_4px_20px_0px_rgba(0,0,0,0.50)]">
      <div className=" items-center justify-center">
        <p
          className={`text-center ${titleFontState.titleLabel} text-default-white`}
        >
          {title}
        </p>
        {description && (
          <p
            className={`mt-[12px] text-center ${bodyFontState.serviceBody}  text-default-gray3`}
          >
            {description}
          </p>
        )}
        <div className="flex items-center justify-center mt-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative flex items-center">
              <div className="">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isPublic}
                  onChange={() => {
                    setIsPublic((prev) => !prev);
                  }}
                />
                <div
                  className={`block w-[48px] h-[28px] rounded-full ${
                    isPublic ? 'bg-strcat-bright-yellow' : 'bg-white/40'
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 w-[20px] h-[20px]  bg-gray-900 rounded-full transition ${
                    isPublic ? 'transform translate-x-full' : ''
                  }`}
                ></div>
              </div>
            </div>
            <div className="ml-2 text-white font-medium w-24 text-left">
              {isPublic ? '공개 할래요' : '공개 안할래요'}
            </div>
          </label>
        </div>
        <div className="mt-[32px] flex">
          <BottomButton
            name="확인"
            width="basis-2/2"
            textColor=""
            color="bg-strcat-bright-yellow"
            onClickHandler={() => {
              resolve(isPublic);
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
}
