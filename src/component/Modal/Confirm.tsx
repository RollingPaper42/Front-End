import BottomButton from '@/component/BottomButton';
import Image from 'next/image';

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
        <div className=" flex h-[270px] w-full items-center justify-center">
          <p>{content}</p>
        </div>
        <div className="absolute bottom-[5px] w-[312px]">
          <div className="bottom-5 flex flex-row justify-around">
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
    </div>
  );
}
