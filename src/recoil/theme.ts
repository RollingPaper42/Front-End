import { atom } from 'recoil';

export interface themeState {
  name: string;
  background: string;
  defaultText: string;
  highlightText: string;
  rightCTA: string;
  leftCTA: string;
}

export const strcat: themeState = {
  name: 'strcat',
  background: 'bg-strcat-default-black',
  defaultText: 'text-strcat-default-white',
  highlightText: 'text-strcat-default-yellow',
  rightCTA: 'bg-strcat-default-cyan',
  leftCTA: 'bg-strcat-default-green',
};

export const calm: themeState = {
  name: 'calm',
  background: 'bg-strcat-calm-white',
  defaultText: 'text-strcat-calm-black',
  highlightText: 'text-strcat-calm-orange',
  rightCTA: 'bg-strcat-calm-cyan',
  leftCTA: 'bg-strcat-calm-green',
};

export const green: themeState = {
  name: 'green',
  background: 'bg-strcat-green-green',
  defaultText: 'text-strcat-green-yellow',
  highlightText: 'strcat-green-black',
  rightCTA: 'bg-strcat-green-cyan',
  leftCTA: 'bg-strcat-green-yellow',
};

export const cyan: themeState = {
  name: 'cyan',
  background: 'bg-strcat-cyan-cyan',
  defaultText: 'text-strcat-cyan-white',
  highlightText: 'text-strcat-cyan-yellow',
  rightCTA: 'bg-strcat-cyan-green',
  leftCTA: 'bg-strcat-cyan-yellow',
};

export const themeObj = {
  strcat: strcat,
  calm: calm,
  green: green,
  cyan: cyan,
};

export const themeState = atom<themeState>({
  key: 'themeState',
  default: strcat,
});
