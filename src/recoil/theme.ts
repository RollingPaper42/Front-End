import { atom } from 'recoil';

export interface themeState {
  DefaultFontColor: string;
  FontColor1: string;
  FontColor2: string;
  PlaceholderColor: string;
  BgColor: string;
}

export const strcat: themeState = {
  DefaultFontColor: 'text-my-white',
  FontColor1: 'text-my-green',
  FontColor2: 'text-my-blue',
  PlaceholderColor: 'placeholder-my-green',
  BgColor: 'bg-my-black',
};
export const calm: themeState = {
  DefaultFontColor: 'text-my-black',
  FontColor1: 'text-my-green',
  FontColor2: 'text-my-blue',
  PlaceholderColor: 'placeholder-my-green',
  BgColor: 'bg-my-white',
};
export const green: themeState = {
  DefaultFontColor: 'text-my-white',
  FontColor1: 'text-my-blue',
  FontColor2: 'text-my-yellow',
  PlaceholderColor: 'placeholder-my-blue',
  BgColor: 'bg-my-black',
};
export const cyan: themeState = {
  DefaultFontColor: 'text-my-white',
  FontColor1: 'text-my-yellow',
  FontColor2: 'text-my-green',
  PlaceholderColor: 'placeholder-my-yellow',
  BgColor: 'bg-my-black',
};

export const themeState = atom<themeState>({
  key: 'themeState',
  default: strcat,
});
