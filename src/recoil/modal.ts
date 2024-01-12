import { atom } from 'recoil';

import { modalComponent } from '@/types/modalComponent';

export const modalState = atom<modalComponent | null>({
  key: 'modalState',
  default: null,
});
