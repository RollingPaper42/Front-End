interface BottomButtonProps {
  name: string;
  width: string;
  onClickHandler: () => void;
  disabled: boolean;
}

export default function BottomButton({
  name,
  width,
  onClickHandler,
  disabled,
}: BottomButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${width} } mx-2 h-12 rounded-lg bg-black text-xl text-white disabled:bg-[#CCCCCC]`}
      onClick={onClickHandler}
    >
      {name}
    </button>
  );
}
