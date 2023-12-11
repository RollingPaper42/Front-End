import ModalBackground from '../Icon/ModalBackground';
import ModalClose from '../Icon/ModalClose';
import BottomButton from '@/component/BottomButton';
import { titleFont } from '@/recoil/font';

interface Props {
  content: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ content, yes, no }: Props) {
  return (
    <div className="relative h-[312px] w-[312px]">
      <ModalBackground />
      <div className="absolute top-0 h-[312px] w-[312px] items-center justify-center p-[16px]">
        <div className="flex w-full justify-end">
          <button onClick={no}>
            <ModalClose />
          </button>
        </div>
        <div className=" items-center justify-center">
          <p
            className={`absolute left-0 top-[97px] px-[24px] text-center ${titleFont.category1}`}
          >
            {content}
          </p>
        </div>
        <div className="absolute bottom-[16px] left-0 flex w-full justify-between px-[16px]">
          <BottomButton
            textColor=""
            height="h-[42px]"
            color="bg-[#A6A6A6]"
            name="아니요"
            width="basis-1/2"
            onClickHandler={no}
            disabled={false}
          />
          <BottomButton
            textColor=""
            height="h-[42px]"
            color="bg-[#7CED43]"
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
