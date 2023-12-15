interface SelectButtonProps {
  width: string;
  onClickHandler: () => void;
  content: string;
}

export default function SelectButton({
  width,
  onClickHandler,
  content,
}: SelectButtonProps) {
  return (
    <button
      className={`${width} border-strcat-gray3 text-strcat-gray3 mb-2 h-[40px] cursor-pointer select-none rounded-[25px] border bg-strcat-black text-center text-[15px]`}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
}
