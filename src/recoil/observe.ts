import { atom } from 'recoil';

export const observeState = atom({
  key: 'observeState',
  default: {
    boardId: '',
    contentId: 0,
    photoUrl: '',
    writer: '',
  },
});
