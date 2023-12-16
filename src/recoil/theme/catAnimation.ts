import { atom } from 'recoil';

import { catAction, catAnimation } from '@/types/animation';

const defaultCat: catAnimation = {
  src: '',
  catAction: catAction.none,
  y: 0,
  x: 0,
  width: 0,
  height: 0,
};

export const catAnimationState = atom<catAnimation>({
  key: 'catState',
  default: defaultCat,
});
