import BottomButton from '../BottomButton';
import ModalClose from '../Icon/ModalClose';
import ShareModal from '../Icon/ShareModal';

interface Props {
  content: string;
  handleModalClose: () => void;
}

export default function ExportSuccess({ content, handleModalClose }: Props) {
  return (
    <div className="relative h-[196px] w-[312px]">
      <ShareModal />
      <div className="absolute top-0 h-[196px] w-[312px] items-center justify-center p-[16px]">
        <div className="flex w-full justify-end">
          <button onClick={handleModalClose}>
            <ModalClose />
          </button>
        </div>
        <div className=" items-center justify-center">
          <p className="absolute left-0 top-[64px] px-[24px] text-center text-[22px]">
            {content}
          </p>
        </div>
        <div className="absolute bottom-[16px] left-0 flex w-full justify-between px-[16px]">
          <BottomButton
            height="h-[42px]"
            color="bg-[#6CD8ED]"
            name="예"
            width="w-full"
            onClickHandler={handleModalClose}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
