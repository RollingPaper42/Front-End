import { atom } from 'recoil';

export interface themeState {
  DefaultFontColor: string;
  FontColor1: string;
  FontColor2: string;
  PlaceholderColor: string;
  BgColor: string;
}

export const strcat: themeState = {
  DefaultFontColor: 'text-strcat-white',
  FontColor1: 'text-strcat-green',
  FontColor2: 'text-strcat-blue',
  PlaceholderColor: 'placeholder-strcat-green',
  BgColor: 'bg-strcat-black',
};
export const calm: themeState = {
  DefaultFontColor: 'text-strcat-black',
  FontColor1: 'text-strcat-green',
  FontColor2: 'text-strcat-blue',
  PlaceholderColor: 'placeholder-strcat-green',
  BgColor: 'bg-strcat-white',
};
export const green: themeState = {
  DefaultFontColor: 'text-strcat-white',
  FontColor1: 'text-strcat-blue',
  FontColor2: 'text-strcat-yellow',
  PlaceholderColor: 'placeholder-strcat-blue',
  BgColor: 'bg-strcat-black',
};
export const cyan: themeState = {
  DefaultFontColor: 'text-strcat-white',
  FontColor1: 'text-strcat-yellow',
  FontColor2: 'text-strcat-green',
  PlaceholderColor: 'placeholder-strcat-yellow',
  BgColor: 'bg-strcat-black',
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
