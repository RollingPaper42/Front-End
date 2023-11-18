import { atom } from 'recoil';

export const observeState = atom({
  key: 'observeState',
  default: {
    boardId: 0,
    contentId: 0,
    photo: '',
    writer: '',
  },
});
