import { atom } from 'recoil';

interface modalComponent {
  modalProps?: JSX.Element;
}

export const modalState = atom<modalComponent | null>({
  key: 'modalState',
  default: null,
});
