import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/modal';
import Photo from './Modal/Photo';
import { observeState } from '@/recoil/observe';

export default function PhotoComponent() {
  const [modal, setModal] = useRecoilState(modalState);
  const [observe] = useRecoilState(observeState);
  return (
    <div>
      <div className="fixed top-[100px] h-24 w-24">
        {observe.photo.length !== 0 && !modal && (
          <Image
            src={observe.photo}
            alt="사진"
            fill
            onClick={() => {
              setModal({
                modalComponent: <Photo photo={observe.photo} />,
              });
            }}
          />
        )}
      </div>
    </div>
  );
}
