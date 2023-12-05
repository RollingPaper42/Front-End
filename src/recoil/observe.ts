import { observe } from '@/types/observe';
import { atom } from 'recoil';

export const observeState = atom<observe>({
  key: 'observeState',
  default: {
    boardId: '',
    contentId: 0,
    photoUrl: '',
    writer: '',
  },
});
