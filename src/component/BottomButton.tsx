export default function BottomButton({
  name,
  width,
  onClickHandler,
  disabled,
}: {
  name: string;
  width: string;
  onClickHandler: () => void;
  disabled: boolean;
}) {
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
