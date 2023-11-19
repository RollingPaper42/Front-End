import { cat, catAction } from '@/types/cat';
import { atom } from 'recoil';

const defaultCat: cat = {
  catAction: catAction.exit,
  left: 100,
  right: 200,
};

export const catState = atom<cat | undefined>({
  key: 'catState',
  default: undefined,
});
