import { modalState } from '@/recoil/modal';
import { useRecoilState } from 'recoil';

const useModal = (): [(modalComponent: JSX.Element) => void, () => void] => {
  const [, setModal] = useRecoilState(modalState);

  const openModal = (modalComponent: JSX.Element) => {
    if (!modalComponent) return;
    setModal({ modalComponent: modalComponent });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = 'auto';
  };

  return [openModal, closeModal];
};

export default useModal;
