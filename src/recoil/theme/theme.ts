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

export const strcat: themeState = {
  name: 'strcat',
  textTheme: strcatText,
  bgTheme: strcatBg,
  catTheme: strcatCat,
  iconTheme: strcatIcon,
};

export const calm: themeState = {
  name: 'calm',
  bgTheme: calmBg,
  catTheme: calmCat,
  textTheme: calmText,
  iconTheme: calmIcon,
};

export const green: themeState = {
  name: 'green',
  textTheme: greenText,
  catTheme: greenCat,
  bgTheme: greenBg,
  iconTheme: greenIcon,
};

export const cyan: themeState = {
  name: 'cyan',
  textTheme: cyanText,
  bgTheme: cyanBg,
  catTheme: cyanCat,
  iconTheme: cyanIcon,
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
