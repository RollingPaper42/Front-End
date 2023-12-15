import BottomButton from '@/component/BottomButton';

interface Props {
  mainContent: string;
  subContent?: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ mainContent, subContent, yes, no }: Props) {
  return (
    <div className="relative w-[280px] rounded-[16px] bg-strcat-textarea-bg px-[16px] pb-[16px] pt-[32px] font-medium shadow-[0px_4px_20px_0px_rgba(0,0,0,0.50)]">
      <div className=" items-center justify-center">
        <p className={`text-center text-body-size1 text-strcat-white`}>
          {mainContent}
        </p>
        {subContent && (
          <p className="mt-[12px] text-center text-body-size2 text-strcat-white/50">
            {subContent}
          </p>
        )}
        <div className="mt-[32px] flex">
          <BottomButton
            textColor="text-strcat-white"
            height="h-[42px]"
            color="bg-strcat-gray2"
            name="취소"
            width="basis-1/2"
            onClickHandler={no}
            disabled={false}
          />
          <div className="w-[12px]"></div>
          <BottomButton
            textColor=""
            height="h-[42px]"
            color="bg-strcat-bright-yellow"
            name="확인"
            width="basis-1/2"
            onClickHandler={yes}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
