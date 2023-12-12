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
      className={`items-center justify-center font-bold tracking-[0.32px] leading-[28px] text-body-size2 
      rounded-[5px] relative ${height} w-full ${width} ${
        disabled ? 'bg-[#909090] text-[#BCBCBC]' : `${color} ${textColor}`
      }`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
