import BottomButton from '@/component/BottomButton';
import Image from 'next/image';
import ModalClose from '../Icon/ModalClose';
import ModalBackground from '../Icon/ModalBackground';

interface Props {
  content: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ content, yes, no }: Props) {
  return (
    <div className="flex  h-[260px] w-[312px] flex-col">
      <ModalBackground />
      <div className="felx felx-col absolute h-[312px] w-[312px] items-center justify-center">
        <div className="flex w-full justify-end p-[16px]">
          <div onClick={no}>
            <ModalClose />
          </div>
        </div>
        <div className=" flex h-[150px] items-center justify-center px-8">
          <p>{content}</p>
        </div>
        <div className="bottom-2 flex flex-row justify-around">
          <BottomButton
            height="h-[42px]"
            color="bg-[#A6A6A6]"
            name="아니요"
            width="basis-2/5"
            onClickHandler={no}
            disabled={false}
          />
          <BottomButton
            height="h-[42px]"
            color="bg-[#7CED43]"
            name="예"
            width="basis-2/5"
            onClickHandler={yes}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
