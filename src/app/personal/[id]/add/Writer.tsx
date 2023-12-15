import { SetStateAction } from 'react';

interface Props {
  writer: string;
  handleWriter: (e: any) => void;
  setIsHidden: React.Dispatch<SetStateAction<boolean>>;
}

export default function Writer({ writer, handleWriter, setIsHidden }: Props) {
  return (
    <div className="h-[51px] pl-[16px] w-full flex items-center justify-center rounded-lg bg-white/10">
      <input
        className="text-body-size2 w-full h-full outline-none bg-transparent placeholder:text-white/50 text-white"
        maxLength={11}
        value={writer}
        onChange={handleWriter}
        placeholder="익명의 스트링캣"
        onFocus={() => setIsHidden(true)}
        onBlur={() => setIsHidden(false)}
      />
      <div
        className={`pr-[16px] text-caption-size2 ${
          writer.length > 10 ? 'text-[#DE6565]' : 'text-white/50'
        }`}
      >
        {writer.length}/10
      </div>
    </div>
  );
}
