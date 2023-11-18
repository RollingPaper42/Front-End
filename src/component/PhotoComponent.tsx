import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/modal';
import Photo from './Modal/Photo';
import { observeState } from '@/recoil/observe';
import useModal from '@/hooks/useModal';

export default function PhotoComponent() {
  const [openModal, closeModal] = useModal();
  //const [modal, setModal] = useRecoilState(modalState);
  const [observe] = useRecoilState(observeState);
  return (
    <div className=" max-h-[100px] max-w-[312px]">
      <div className="fixed top-[100px] h-24 w-24">
        {observe.photo.length !== 0 && (
          <Image
            src={observe.photo}
            alt="사진"
            fill
            onClick={() => {
              openModal(<Photo photo={observe.photo} />);
            }}
          />
        )}
      </div>
    </div>
  );
}
