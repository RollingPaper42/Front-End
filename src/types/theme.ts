import {
  bgThemeState,
  chrisBg,
  lilacBg,
  masBg,
  nightBg,
  noneBg,
  peachBg,
  sulBg,
} from '@/utils/theme/bgTheme';
import {
  chrisText,
  lilacText,
  masText,
  nightText,
  noneText,
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
  sul: sul,
};

export const OpenBoardThemeColor: Record<string, string> = {
  night: 'bg-strcat-night/50 border-strcat-night',
  peach: 'bg-strcat-peach/50 border-strcat-peach',
  lilac: 'bg-strcat-lilac/50 border-strcat-lilac',
  chris: 'bg-strcat-chris/50 border-strcat-chris',
  mas: 'bg-strcat-mas/50 border-strcat-mas',
  sul: 'bg-strcat-sul/50 border-strcat-sul',
  spring: 'bg-strcat-spring/50 border-strcat-spring',
};

export const OpenBoardTextColor: Record<string, string> = {
  night: 'text-strcat-night',
  peach: 'text-strcat-peach',
  lilac: 'text-strcat-lilac',
  chris: 'text-white/70',
  mas: 'text-white/70',
  sul: 'text-strcat-sul',
  spring: 'text-strcat-spring',
};
