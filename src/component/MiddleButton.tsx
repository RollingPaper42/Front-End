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
      className={`flex-none ${width}  h-[40px] rounded-[25px] ${color} text-center text-[15px]`}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
}
