import { atom } from 'recoil';

export const hiddenState = atom<boolean>({
  key: 'hiddenState',
  default: false,
});
