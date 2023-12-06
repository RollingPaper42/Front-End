import { atom } from 'recoil';

export interface fontState {
  category1: string;
  category2: string;
}

export const headlineFont: fontState = {
  category1: 'text-headline-size1 font-normal leading-16',
  category2: 'text-headline-size2 font-normal leading-15',
};

export const titleFont: fontState = {
  category1: 'text-title-size1 font-normal leading-15',
  category2: 'text-title-size2 font-normal leading-14',
};

export const bodyFont: fontState = {
  category1: 'text-body-size1 font-normal leading-16',
  category2: 'text-body-size2 font-normal leading-16',
};

export const captionFont: fontState = {
  category1: 'text-caption-size1 font-normal leading-14',
  category2: 'text-caption-size2 font-normal leading-14',
};

export const fontState = atom<fontState>({
  key: 'fontState',
  default: bodyFont,
});
