import useModal from '@/hooks/useModal';
import ModalErrorBackground from '../Icon/ModalErrorBackground';
import BottomButton from '../BottomButton';

interface Props {
  content: string;
  handleModalClose: () => void;
}

export default function Error({ content, handleModalClose }: Props) {
  return (
    <div className="flex h-[196px] w-[312px] flex-col">
      <ModalErrorBackground />
      <div className="absolute flex h-[196px] w-[312px] flex-col items-center justify-center">
        <div className="flex h-[100px] items-center justify-center px-[24px]">
          {content}
        </div>
        <div className=" bottom-2 flex w-[280px] items-center justify-center">
          <BottomButton
            height="42px"
            color="bg-[#6CD8ED]"
            name="돌아가기"
            width="w-full"
            disabled={false}
            onClickHandler={handleModalClose}
          ></BottomButton>
        </div>
      </div>
    </div>
  );
}
