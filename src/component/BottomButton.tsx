import { titleFont } from '@/recoil/font';

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
      className={`relative mx-2 h-[42px] w-full ${width}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      <div
        className={`absolute top-[3px] h-[39px] w-full ${
          disabled ? 'bg-[#CCCCCC]' : color
        }`}
      />
      {/* top에서 아래로 3px */}
      <div
        className={`absolute left-[2px] top-0 h-[39px] w-full ${
          disabled ? 'bg-[#CCCCCC]' : color
        }`}
      />
      {/* top고정 오른쪽으로 2px */}
      <div
        className={`absolute left-[1px] top-[4px] flex h-[33px] w-full items-center justify-center text-strcat-default-black ${titleFont.category1}`}
      >
        {/* top에서 아래로4px 오른쪽으로 1px, 33px크기  */}
        {name}
      </div>
    </button>
  );
}
