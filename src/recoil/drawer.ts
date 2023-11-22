import { atom } from 'recoil';

export const drawerState = atom<boolean>({
  key: 'drawerState',
  default: false,
});
