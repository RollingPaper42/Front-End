import BottomButton from '@/component/Common/BottomButton';
import { bodyFontState } from '@/recoil/font/body';
import { titleFontState } from '@/recoil/font/title';

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
        <p
          className={`text-center ${titleFontState.titleLabel} text-strcat-white`}
        >
          {mainContent}
        </p>
        {subContent && (
          <p
            className={`mt-[12px] text-center ${bodyFontState.serviceBody}  text-strcat-gray-500`}
          >
            {subContent}
          </p>
        )}
        <div className="mt-[32px] flex">
          <BottomButton
            name="취소"
            width="basis-1/2"
            textColor="text-strcat-white"
            color="bg-strcat-gray2"
            onClickHandler={no}
          />
          <div className="w-[12px]"></div>
          <BottomButton
            name="확인"
            width="basis-1/2"
            textColor=""
            color="bg-strcat-bright-yellow"
            onClickHandler={yes}
          />
        </div>
      </div>
    </div>
  );
}
