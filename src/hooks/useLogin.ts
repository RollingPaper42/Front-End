import { loginState } from '@/recoil/login';
import { useRecoilState } from 'recoil';

export const useLogin = (): [
  (modalComponent: JSX.Element) => void,
  () => void,
] => {
  const [, setModal] = useRecoilState(loginState);

  const openModal = (modalComponent: JSX.Element) => {
    if (!modalComponent) return;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
  };

  return [openModal, closeModal];
};
