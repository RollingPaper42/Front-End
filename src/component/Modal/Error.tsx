import ModalErrorBackground from '../Icon/ModalErrorBackground';
import BottomButton from '../BottomButton';
import ModalClose from '../Icon/ModalClose';
import ModalBackground from '../Icon/ModalBackground';
import { titleFont } from '@/recoil/font';

interface Props {
  content: string;
  handleModalClose: () => void;
}

export default function Error({ content, handleModalClose }: Props) {
  const array = content.replace(/\\n/g, '\n').split('\n');
  return (
    <>
      {array.length !== 1 ? (
        <div className="relative h-[312px] w-[312px]">
          <ModalBackground />
          <div className="absolute top-0 h-[312px] w-[312px] items-center justify-center p-[16px]">
            <div className="flex w-full justify-end">
              <button onClick={handleModalClose}>
                <ModalClose />
              </button>
            </div>
            <p
              className={`absolute left-0 top-[97px] flex w-full items-center justify-center px-[24px] text-center ${titleFont.category1}`}
            >
              {content
                .replace(/\\n/g, '\n')
                .split('\n')
                .map((item, idx) => {
                  return idx === 0 ? item : [<br key={idx} />, item];
                })}{' '}
            </p>
            <div className="absolute bottom-[16px] left-0 flex w-full justify-between px-[16px]">
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
      ) : (
        <div className="flex h-[196px] w-[312px] flex-col">
          <ModalErrorBackground />
          <div className="absolute flex h-[196px] w-[312px] flex-col items-center justify-center">
            <div className="flex w-full justify-end pr-[16px]">
              <button onClick={handleModalClose}>
                <ModalClose />
              </button>
            </div>
            <div
              className={`flex h-[90px] items-center justify-center px-[24px] text-center ${titleFont.category1}`}
            >
              {content
                .replace(/\\n/g, '\n')
                .split('\n')
                .map((item, idx) => {
                  return idx === 0 ? item : [<br key={idx} />, item];
                })}
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
      )}
    </>
  );
}
