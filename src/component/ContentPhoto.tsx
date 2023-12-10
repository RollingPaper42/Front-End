import { useRecoilState } from 'recoil';

import Photo from './Modal/Photo';
import useModal from '@/hooks/useModal';
import { observeState } from '@/recoil/observe';

export default function ContentPhoto() {
  const [openModal] = useModal();
  const [observe] = useRecoilState(observeState);
  return (
    <div className="fixed top-[100px] mx-[24px] h-[100px] max-w-[312px]">
      {observe.photoUrl && observe.photoUrl.length !== 0 && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={observe.photoUrl}
          alt="사진"
          width={innerWidth}
          height={innerHeight}
          className="h-[100px] w-auto max-w-[312px] "
          onClick={() => {
            openModal(<Photo photoUrl={observe.photoUrl} />);
          }}
        />
      )}
    </div>
  );
}
