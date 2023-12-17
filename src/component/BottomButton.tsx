import { titleFont } from '@/recoil/font';
import { titleFontState } from '@/recoil/font/title';

interface Props {
  name: string;
  width: string;
  onClickHandler: () => void;
  disabled?: boolean;
  color: string;
  height?: string;
  textColor: string;
  isShadow?: boolean;
}

export default function BottomButton({
  name,
  width,
  onClickHandler,
  disabled,
  color,
  textColor,
  height,
  isShadow,
}: Props) {
  return (
    <button
      className={`relative cursor-pointer select-none items-center justify-center rounded-[5px] ${
        titleFontState.buttonLabel
      } ${height ?? 'h-[46px]'} w-full ${width} ${
        disabled ? 'bg-[#909090] text-[#BCBCBC]' : `${color} ${textColor}`
      } ${isShadow && 'shadow-[0px_0px_15px_1px_rgba(0,0,0,0.40)]'}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
