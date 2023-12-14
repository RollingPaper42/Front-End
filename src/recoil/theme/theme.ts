import { atom } from 'recoil';

import {
  calmIcon,
  cyanIcon,
  greenIcon,
  iconThemeState,
  strcatIcon,
} from './IconTheme';
import { bgThemeState, calmBg, cyanBg, greenBg, strcatBg } from './bgTheme';
import {
  calmCat,
  catThemeState,
  cyanCat,
  greenCat,
  strcatCat,
} from './catTheme';
import {
  calmText,
  cyanText,
  greenText,
  strcatText,
  textThemeState,
} from './textTheme';

export interface themeState {
  name: string;
  bgTheme: bgThemeState;
  catTheme: catThemeState;
  textTheme: textThemeState;
  iconTheme: iconThemeState;
}

export const yellow: themeState = {
  name: 'yellow',
  textTheme: strcatText,
  bgTheme: strcatBg,
  catTheme: strcatCat,
  iconTheme: strcatIcon,
};

export const peach: themeState = {
  name: 'peach',
  bgTheme: calmBg,
  catTheme: calmCat,
  textTheme: calmText,
  iconTheme: calmIcon,
};

export const lilac: themeState = {
  name: 'lilac',
  textTheme: greenText,
  catTheme: greenCat,
  bgTheme: greenBg,
  iconTheme: greenIcon,
};

export const christ: themeState = {
  name: 'christ',
  textTheme: cyanText,
  bgTheme: cyanBg,
  catTheme: cyanCat,
  iconTheme: cyanIcon,
};

export const mas: themeState = {
  name: 'mas',
  textTheme: strcatText,
  bgTheme: strcatBg,
  catTheme: strcatCat,
  iconTheme: strcatIcon,
};

export const themeObj = {
  yellow: yellow,
  peach: peach,
  lilac: lilac,
  christ: christ,
  mas: mas,
};

export const themeState = atom<themeState>({
  key: 'themeState',
  default: yellow,
});
