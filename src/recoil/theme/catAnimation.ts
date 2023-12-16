import { catAction, catAnimation } from '@/types/animation';
import { atom } from 'recoil';

const defaultCat: catAnimation = {
  src: '',
  catAction: catAction.none,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
};

export const catAnimationState = atom<catAnimation>({
  key: 'catState',
  default: defaultCat,
});
