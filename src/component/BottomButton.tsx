import { themeState } from '@/recoil/theme';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface BottomButtonProps {
  name: string;
  width: string;
  onClickHandler: () => void;
  disabled: boolean;
  color: string;
  height: string;
}

export default function BottomButton({
  name,
  width,
  onClickHandler,
  disabled,
  color,
}: BottomButtonProps) {
  return (
    <button
      className={`relative mx-2 h-[42px] ${width}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      <div
        id="strcatCreate"
        className={`absolute inset-0 h-[38px] w-full ${
          disabled ? 'bg-[#CCCCCC]' : color
        }`}
      >
        <div
          className={`relative bottom-[4.5px] left-[2px] h-[38px] w-full ${
            disabled ? 'bg-[#CCCCCC]' : color
          }`}
          style={{ lineHeight: '3rem' }}
        />
      </div>
      <h1 className="absolute inset-0 flex w-full items-center justify-center text-xl text-black ">
        {name}
      </h1>
    </button>
  );
}
