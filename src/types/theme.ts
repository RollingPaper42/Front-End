import {
  bgThemeState,
  chrisBg,
  lilacBg,
  masBg,
  nightBg,
  peachBg,
  sulBg,
} from '@/utils/theme/bgTheme';
import {
  chrisText,
  lilacText,
  masText,
  nightText,
  peachText,
  sulText,
  textThemeState,
} from '@/utils/theme/textTheme';

export interface themeState {
  name: string;
  bgTheme: bgThemeState;
  textTheme: textThemeState;
}

export const peach: themeState = {
  name: 'peach',
  textTheme: peachText,
  bgTheme: peachBg,
};

export const night: themeState = {
  name: 'night',
  bgTheme: nightBg,
  textTheme: nightText,
};

export const chris: themeState = {
  name: 'chris',
  textTheme: chrisText,
  bgTheme: chrisBg,
};

export const mas: themeState = {
  name: 'mas',
  textTheme: masText,
  bgTheme: masBg,
};

export const lilac: themeState = {
  name: 'lilac',
  textTheme: lilacText,
  bgTheme: lilacBg,
};

export const sul: themeState = {
  name: 'sul',
  textTheme: sulText,
  bgTheme: sulBg,
};

export const themeObj = {
  night: night,
  peach: peach,
  lilac: lilac,
  chris: chris,
  mas: mas,
  sul: sul,
};
