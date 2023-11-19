import Image from 'next/image';
import { useRecoilState } from 'recoil';
import Photo from './Modal/Photo';
import { observeState } from '@/recoil/observe';
import useModal from '@/hooks/useModal';

export default function PhotoComponent() {
  const [openModal] = useModal();
  const [observe] = useRecoilState(observeState);
  return (
    <div className="fixed top-[100px] h-[100px] max-w-[312px]">
      {observe.photo.length !== 0 && (
        <Image
          src={observe.photo}
          alt="사진"
          width={innerWidth}
          height={innerHeight}
          className="h-[100px] w-auto max-w-[312px] "
          onClick={() => {
            openModal(<Photo photo={observe.photo} />);
          }}
        />
      )}
    </div>
  );
}
