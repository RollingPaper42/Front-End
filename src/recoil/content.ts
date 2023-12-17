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

export const addContentState = atom({
  key: 'addContentState',
  default: 0,
});
