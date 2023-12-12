import { atom } from 'recoil';

export const titleState = atom<string>({
  key: 'titleState',
  default: '무슨 말이든 물어보세요~ Ask anything what you want!',
});
