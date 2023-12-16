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
      className={`relative cursor-pointer select-none items-center justify-center rounded-[5px] text-body-size2 font-bold 
      leading-[28px] tracking-[0.32px] ${height} w-full ${width} ${
        disabled ? 'bg-[#909090] text-[#BCBCBC]' : `${color} ${textColor}`
      }`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
