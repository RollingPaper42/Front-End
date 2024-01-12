import {
  bgThemeState,
  chrisBg,
  lilacBg,
  masBg,
  nightBg,
  noneBg,
  peachBg,
} from '@/utils/theme/bgTheme';
import {
  chrisText,
  lilacText,
  masText,
  nightText,
  noneText,
  peachText,
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

export const noneTheme: themeState = {
  name: '',
  textTheme: noneText,
  bgTheme: noneBg,
};

export const themeObj = {
  night: night,
  peach: peach,
  lilac: lilac,
  chris: chris,
  mas: mas,
};
