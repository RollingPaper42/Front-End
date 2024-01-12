import { bodyFontState } from '@/recoil/font/body';

interface MiddleButtonProps {
  width: string;
  onClickHandler: () => void;
  content: string;
  color: string;
}

export default function MiddleButton({
  width,
  onClickHandler,
  content,
  color,
}: MiddleButtonProps) {
  return (
    <button
      className={`flex-none ${width} h-[40px] cursor-pointer select-none rounded-[25px] ${color} text-center ${bodyFontState.serviceSubBody}`}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
}
