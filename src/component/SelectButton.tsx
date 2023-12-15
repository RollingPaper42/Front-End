import React from 'react';

interface SelectButtonProps {
  width: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  content: string;
}

export default function SelectButton({
  width,
  setContent,
  content,
}: SelectButtonProps) {
  const onClickHandler = () => {
    setContent(content);
  };
  return (
    <button
      className={` ${width}  border-strcat-gray3 text-strcat-gray3 mb-2 h-[40px] rounded-[25px] border bg-strcat-black text-center text-[15px]`}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
}
