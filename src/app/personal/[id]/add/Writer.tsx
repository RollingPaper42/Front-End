import { SetStateAction } from 'react';

interface Props {
  writer: string;
  handleWriter: (e: any) => void;
  setIsFixed: React.Dispatch<SetStateAction<boolean>>;
}

export default function Writer({ writer, handleWriter, setIsFixed }: Props) {
  const handleWriterInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.trim() === '') {
      e.currentTarget.value = '';
    }
    handleWriter(e);
  };
  return (
    <div className="flex h-[51px] w-full items-center justify-center rounded-lg bg-white/10 pl-[16px]">
      <input
        className="h-full w-full bg-transparent text-body-size2 text-white outline-none placeholder:text-white/50"
        maxLength={11}
        value={writer}
        onInput={handleWriterInput}
        placeholder="익명의 스트링캣"
        onFocus={() => setIsFixed(true)}
      />
      <div
        className={`cursor-default select-none pr-[16px] text-caption-size2 ${
          writer.length > 10 ? 'text-[#DE6565]' : 'text-white/50'
        }`}
      >
        {writer.length}/10
      </div>
    </div>
  );
}
