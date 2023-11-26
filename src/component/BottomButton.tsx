import { themeState } from '@/recoil/theme';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface BottomButtonProps {
  name: string;
  width: string;
  onClickHandler: () => void;
  disabled: boolean;
  color: string;
}

export default function BottomButton({
  name,
  width,
  onClickHandler,
  disabled,
  color,
}: BottomButtonProps) {
  useEffect(() => {}, [disabled]);
  return (
    <button
      className={`relative mx-2 h-12 ${width}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      <div
        className={`absolute inset-0 w-full ${
          disabled ? 'bg-[#CCCCCC]' : color
        }`}
      >
        <div
          className={`relative bottom-[4.5px] left-[2px] h-12 w-full ${
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
