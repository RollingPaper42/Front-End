import { atom } from 'recoil';

export const titleState = atom<string>({
  key: 'titleState',
  default: '나무슨 말이봐',
});
