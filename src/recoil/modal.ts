import { modalComponent } from '@/types/modalComponent';
import { atom } from 'recoil';

export const modalState = atom<modalComponent | null>({
  key: 'modalState',
  default: null,
});
