import BottomButton from '@/component/BottomButton';
import Image from 'next/image';
import Close from '../Icon/Close';

interface Props {
  content: string;
  yes: () => void;
  no: () => void;
}

export default function Confirm({ content, yes, no }: Props) {
  return (
    <div className="flex  h-[312px] w-[311px] flex-col">
      <Image src={'/Modal.png'} alt="modal" width={312} height={312} />
      <div className="felx felx-col absolute h-[312px] w-[312px] items-center justify-center">
        <div className="flex w-full justify-end p-[16px]">
          <div onClick={no}>
            <Close />
          </div>
        </div>
        <div className=" flex h-[190px] items-center justify-center">
          <p>{content}</p>
        </div>
        <div className="flex flex-row justify-around">
          <BottomButton
            height="h-[42px]"
            color="bg-red-300"
            name="예"
            width="basis-2/5"
            onClickHandler={yes}
            disabled={false}
          />
          <BottomButton
            height="h-[42px]"
            color="bg-yellow-300"
            name="아니요"
            width="basis-2/5"
            onClickHandler={no}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
