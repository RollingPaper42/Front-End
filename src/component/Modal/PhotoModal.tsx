import { useRecoilState } from 'recoil';

import Close from '../Icon/Close';
import Photo from '../Photo';
import { themeState } from '@/recoil/state';
import { handleBackground } from '@/utils/handleBackground';

interface Props {
  photoUrl: string;
  closeModal: () => void;
  text: string;
  writer: string;
}

export default function PhotoModal({
  photoUrl,
  closeModal,
  text,
  writer,
}: Props) {
  const [theme] = useRecoilState(themeState);
  return (
    <div
      onClick={(e) => handleBackground(e, closeModal)}
      className="flex h-full w-full flex-col items-center justify-center bg-black/80 px-[24px]"
    >
      <div className="flex justify-end w-full h-[24px] mb-[24px]">
        <button onClick={closeModal} className="px-[24px]">
          <Close />
        </button>
      </div>
      <Photo photoUrl={photoUrl} />
      <div className="h-[16px] w-full"></div>
      <div className="h-[204px] w-full justify-start overflow-y-scroll break-all text-justify  scrollbar-thin scrollbar-thumb-drawer-scrollbar">
        <p
          className={`${theme.bgTheme.highlight} ${theme.textTheme.highlight} inline pb-[4px] pt-[3px] text-body-size1 font-medium leading-[31px] tracking-[-0.36px] transition`}
        >
          {text}
        </p>
        <div
          className={`text-right transition-all ${theme.textTheme.writer} text-body-size2`}
        >{`From: ${writer.length ? writer : '익명의 스트링캣'} `}</div>
      </div>
    </div>
  );
}
