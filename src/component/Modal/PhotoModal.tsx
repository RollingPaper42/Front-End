import PhotoClose from '../Icon/PhotoClose';
import Photo from '../Photo';
import { handleBackground } from '@/utils/handleBackground';

interface Props {
  photoUrl: string;
  closeModal: () => void;
  text: string;
}

export default function PhotoModal({ photoUrl, closeModal, text }: Props) {
  return (
    <div
      onClick={(e) => handleBackground(e, closeModal)}
      className="h-full w-full px-[24px] flex flex-col justify-center items-center bg-black/80"
    >
      <button
        onClick={closeModal}
        className=" absolute top-[24px] w-full mb-[24px] flex justify-end px-[24px]"
      >
        <PhotoClose />
      </button>
      <Photo photoUrl={photoUrl} />
      <div className="w-full h-[16px]"></div>
      <div className=" text-body-size1 overflow-y-scroll h-[204px] text-justify">
        <p className=" inline leading-[31px] tracking-[-0.36px] shadow-highlight bg-[#feffb0]">
          {text}
        </p>
      </div>
    </div>
  );
}
