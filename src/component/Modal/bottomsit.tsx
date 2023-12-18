import Close from '../Icon/Close';
import BottomButton from '@/component/BottomButton';
import { titleFontState } from '@/recoil/font/title';

interface Props {
  mainContent: string;
  subContent?: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ mainContent, subContent, yes, no }: Props) {
  return (
    <div className="relative w-[280px] rounded-[16px] bg-strcat-textarea-bg px-[16px] pb-[16px] pt-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.50)]">
      <div className=" items-end">
        <Close />
      </div>
      <div className=" items-center justify-center">
        <p
          className={`text-center ${titleFontState.titleLabel} text-strcat-white`}
        >
          {mainContent}
        </p>
        <div className="mx-[16px]">
          <BottomButton
            name="확인"
            width="w-full"
            textColor="text-default-black"
            color="bg-strcat-bright-yellow"
            onClickHandler={yes}
          />
        </div>
      </div>
    </div>
  );
}
