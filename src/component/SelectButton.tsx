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
      className={` ${width}  h-[40px] mb-2 rounded-[25px] border border-strcat-gray3 bg-strcat-black text-strcat-gray3 text-center text-[15px]`}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
}
