import React from 'react';

import { bodyFontState } from '@/recoil/font/body';
import { defaultState } from '@/utils/theme/default';

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
      className={` ${width}  border-default-gray4 text-default-gray4 mb-2 h-[40px] rounded-[25px] border ${defaultState.background} cursor-pointer select-none text-center ${bodyFontState.serviceSubBody}`}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
}
