import { modalState } from '@/recoil/modal';
import { useRecoilState } from 'recoil';

const useModal = (modalComponent: JSX.Element): [() => void, () => void] => {
  const [, setModalRecoil] = useRecoilState(modalState);

  const setModal = () => {
    console.log('hi');
    setModalRecoil({ modalComponent: modalComponent });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalRecoil(null);
    document.body.style.overflow = 'auto';
  };

  return [setModal, closeModal];
};

export default useModal;
