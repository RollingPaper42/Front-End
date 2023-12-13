import ModalBackground from '../Icon/ModalBackground';
import ModalClose from '../Icon/ModalClose';
import BottomButton from '@/component/BottomButton';
import { titleFont } from '@/recoil/font';

interface Props {
  mainContent: string;
  subContent: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ mainContent, subContent, yes, no }: Props) {
  return (
    <div className="relative w-[280px] pt-[32px] pb-[16px] px-[16px] bg-strcat-textarea-bg rounded-[16px]">
      <div className=" items-center justify-center">
        <p className={`text-center text-body-size1 text-strcat-white`}>
          {mainContent}
        </p>
        <p
          className={`text-center text-body-size1 text-strcat-white/50 mt-[12px]`}
        >
          {' '}
          {subContent}
        </p>
        <div className="mt-[32px] flex">
          <BottomButton
            textColor="text-strcat-white"
            height="h-[42px]"
            color="bg-strcat-gray2"
            name="아니요"
            width="basis-1/2"
            onClickHandler={no}
            disabled={false}
          />
          <div className="w-[12px]"></div>
          <BottomButton
            textColor=""
            height="h-[42px]"
            color="bg-strcat-bright-yellow"
            name="예"
            width="basis-1/2"
            onClickHandler={yes}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
