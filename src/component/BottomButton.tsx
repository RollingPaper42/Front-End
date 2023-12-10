import { bodyFont } from '@/recoil/font';

interface BottomButtonProps {
  name: string;
  width: string;
  onClickHandler: () => void;
  disabled: boolean;
  color: string;
  height: string;
  textColor: string;
}

export default function BottomButton({
  name,
  width,
  onClickHandler,
  disabled,
  color,
  textColor,
  height,
}: BottomButtonProps) {
  return (
    <button
      className={` items-center justify-center font-bold ${
        bodyFont.category2
      } ${textColor} rounded relative mx-1 ${height} w-full ${width} ${
        disabled ? 'bg-[#CCCCCC]' : color
      } `}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
