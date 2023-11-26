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
  return (
    <button
      disabled={disabled}
      className={`${width} relative mx-2 h-12 items-center ${color} text-xl disabled:bg-[#CCCCCC]`}
      onClick={onClickHandler}
    >
      <div
        className={`${width} relative bottom-[4.5px] left-[2px] h-12 text-xl ${
          disabled ? 'bg-[#CCCCCC]' : color
        }`}
        style={{ lineHeight: '3rem' }}
      >
        <h1 className=" bottom-[-4.5px] left-[-2px]">{name}</h1>
      </div>
    </button>
  );
}
