import BottomButton from '@/component/BottomButton';

interface Props {
  content: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ content, yes, no }: Props) {
  return (
    <div className="flex  h-[312px] w-[311px] flex-col bg-green-700">
      <div
        className={`'bg-[#CCCCCC]' } absolute inset-0 h-[308px] 
        w-full`}
      >
        <div
          className={`w-full'bg-[#CCCCCC]' } relative bottom-[4.5px] left-[2px]
          h-[38px]`}
          style={{ lineHeight: '3rem' }}
        />
      </div>
      {content}
      <div className="flex flex-row justify-around">
        <BottomButton
          height="h-[42px]"
          color="bg-white"
          name="예"
          width="basis-2/5"
          onClickHandler={yes}
          disabled={false}
        />
        <BottomButton
          height="h-[42px]"
          color="bg-white"
          name="아니요"
          width="basis-2/5"
          onClickHandler={no}
          disabled={false}
        />
      </div>
    </div>
  );
}
