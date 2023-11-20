import { cat, catAction } from '@/types/cat';
import { atom } from 'recoil';

const defaultCat: cat = {
  catAction: catAction.none,
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};

export const catState = atom<cat>({
  key: 'catState',
  default: defaultCat,
});
