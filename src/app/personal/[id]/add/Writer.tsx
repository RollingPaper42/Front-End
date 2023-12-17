import { SetStateAction } from 'react';

import { captionFontState } from '@/recoil/font/caption';

interface Props {
  writer: string;
  handleWriter: (e: any) => void;
}

export default function Writer({ writer, handleWriter }: Props) {
  const handleWriterInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.trim() === '') {
      e.currentTarget.value = '';
    }
    handleWriter(e);
  };
  return (
    <div className="flex h-[51px] w-full items-center justify-center rounded-lg bg-white/10 pl-[16px]">
      <input
        className={`h-full w-full bg-transparent  text-white ${captionFontState.textField} outline-none placeholder:text-white/50`}
        maxLength={11}
        value={writer}
        onInput={handleWriterInput}
        placeholder="익명의 스트링캣"
      />
      <div
        className={`cursor-default select-none pr-[16px] ${
          captionFontState.countIndicator
        } ${writer.length > 10 ? 'text-[#DE6565]' : 'text-white/50'}`}
      >
        {writer.length}/10
      </div>
    </div>
  );
}
