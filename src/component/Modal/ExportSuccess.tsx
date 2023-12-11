import BottomButton from '../BottomButton';
import ModalClose from '../Icon/ModalClose';
import ShareModal from '../Icon/ShareModal';
import { titleFont } from '@/recoil/font';

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
        <p
          className={`absolute left-0 top-[64px] px-[24px] text-center ${titleFont.category1}`}
        >
          {content}
        </p>
        <div className="absolute bottom-[16px] left-0 flex w-full justify-between px-[16px]">
          <BottomButton
            textColor=""
            height="h-[42px]"
            color="bg-[#6CD8ED]"
            name="확인"
            width="w-full"
            onClickHandler={handleModalClose}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
