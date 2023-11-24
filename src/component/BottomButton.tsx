import { themeState } from '@/recoil/theme';
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
  const [theme] = useRecoilState(themeState);
  return (
    <button
      disabled={disabled}
      className={`${width} relative mx-2 h-12 ${color} text-xl disabled:bg-[#CCCCCC]`}
      onClick={onClickHandler}
    >
      <div
        className={`absolute left-0 top-0 h-[4.5px] w-[2px] ${theme.BgColor}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 h-[4.5px] w-[2px] ${theme.BgColor}`}
      ></div>
      {name}
    </button>
  );
}
