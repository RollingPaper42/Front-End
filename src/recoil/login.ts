import { atom } from 'recoil';

export const loginState = atom<boolean | undefined>({
  key: 'loginState',
  default: undefined,
});
