import { useRecoilState } from 'recoil';

import PhotoClose from '../Icon/PhotoClose';
import Photo from '../Photo';
import { themeState } from '@/recoil/state';
import { handleBackground } from '@/utils/handleBackground';

interface Props {
  photoUrl: string;
  closeModal: () => void;
  text: string;
}

export default function PhotoModal({ photoUrl, closeModal, text }: Props) {
  const [theme, setTheme] = useRecoilState(themeState);
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
      <div className=" overflow-y-scroll h-[204px] text-justify">
        <p
          className={`${theme.bgTheme.contentContainer} ${theme.textTheme.highlight} transition inline pt-[3px] pb-[4px] leading-[31px] text-body-size1 tracking-[-0.36px] font-medium`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
