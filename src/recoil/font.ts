import { atom } from 'recoil';

export interface fontState {
  EN1: string;
  EN2: string;
  KR1: string;
  KR2: string;
}

export const headlineFont: fontState = {
  EN1: 'bg-strcat-default-black',
  EN2: 'text-strcat-default-white',
  KR1: 'text-strcat-default-yellow',
  KR2: 'bg-strcat-default-cyan',
};

export const titleFont: fontState = {
  EN1: 'bg-strcat-default-black',
  EN2: 'text-strcat-default-white',
  KR1: 'text-strcat-default-yellow',
  KR2: 'bg-strcat-default-cyan',
};

export const bodyFont: fontState = {
  EN1: 'bg-strcat-default-black',
  EN2: 'text-strcat-default-white',
  KR1: 'text-strcat-default-yellow',
  KR2: 'bg-strcat-default-cyan',
};

export const captionFont: fontState = {
  EN1: 'bg-strcat-default-black',
  EN2: 'text-strcat-default-white',
  KR1: 'text-strcat-default-yellow',
  KR2: 'bg-strcat-default-cyan',
};

export const fontState = atom<fontState>({
  key: 'fontState',
  default: bodyFont,
});
