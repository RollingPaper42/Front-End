import { atom } from 'recoil';
import {
  calmCat,
  catThemeState,
  cyanCat,
  greenCat,
  strcatCat,
} from './catTheme';

export interface themeState {
  name: string;
  background: string;
  defaultText: string;
  highlightText: string;
  writerContainer: string;
  rightCTA: string;
  leftCTA: string;
  catTheme: catThemeState;
  defaultIcon: string;
  loginIcon: string;
  backIcon: string;
  activeDropItem: string;
  titleText: string;
  placeholder: string;
}

export const strcat: themeState = {
  name: 'strcat',
  background: 'bg-strcat-default-black',
  defaultText: 'text-strcat-default-white',
  highlightText: 'text-strcat-default-yellow',
  writerContainer: 'bg-strcat-default-yellow',
  rightCTA: 'bg-strcat-default-cyan',
  leftCTA: 'bg-strcat-default-green',
  catTheme: strcatCat,
  defaultIcon: '#FBFF36', //strcat-default-yellow
  loginIcon: '#6CD8ED', //strcat-default-cyan
  backIcon: '#FFFFFF', //strcat-default-white
  activeDropItem: 'bg-strcat-default-yellow',
  titleText: 'text-strcat-default-white',
  placeholder: 'placeholder:text-strcat-default-white',
};

export const calm: themeState = {
  name: 'calm',
  background: 'bg-strcat-calm-white',
  defaultText: 'text-strcat-calm-black',
  highlightText: 'text-strcat-calm-orange',
  writerContainer: 'bg-strcat-calm-orange',
  rightCTA: 'bg-strcat-calm-cyan',
  leftCTA: 'bg-strcat-calm-green',
  catTheme: calmCat,
  defaultIcon: '#FFA857', //strcat-calm-orange
  loginIcon: '#557FE4', //strcat-calm-text-cyan
  backIcon: '#463F3A', //strcat-calm-text-black
  activeDropItem: 'bg-strcat-calm-orange',
  titleText: 'text-strcat-calm-black',
  placeholder: 'placeholder:text-strcat-default-black',
};

export const green: themeState = {
  name: 'green',
  background: 'bg-strcat-green-green',
  defaultText: 'text-strcat-green-yellow',
  highlightText: 'text-strcat-green-black',
  writerContainer: 'bg-strcat-calm-black',
  rightCTA: 'bg-strcat-green-cyan',
  leftCTA: 'bg-strcat-green-yellow',
  catTheme: greenCat,
  defaultIcon: '#212121', //strcat-green-black
  loginIcon: 'FF43A8', // strcat-default-magenta
  backIcon: '#212121', //strcat-green-black
  activeDropItem: 'bg-strcat-green-yellow',
  titleText: 'text-strcat-green-black',
  placeholder: 'placeholder:text-strcat-default-yellow',
};

export const cyan: themeState = {
  name: 'cyan',
  background: 'bg-strcat-cyan-cyan',
  defaultText: 'text-strcat-cyan-white',
  highlightText: 'text-strcat-cyan-yellow',
  writerContainer: 'bg-strcat-cyan-yellow',
  rightCTA: 'bg-strcat-cyan-green',
  leftCTA: 'bg-strcat-cyan-yellow',
  catTheme: cyanCat,
  loginIcon: '#FBFF36', //strcat-cyan-yellow
  defaultIcon: '#FFFFFF', //strcat-cyan-white
  backIcon: '#FFFFFF', //strcat-cyan-white
  activeDropItem: 'bg-strcat-cyan-yellow',
  titleText: 'text-strcat-cyan-white',
  placeholder: 'placeholder:text-strcat-default-white',
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
