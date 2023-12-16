import { atom } from 'recoil';

export interface fontState {
  category1: string;
  category2: string;
  category3: string;
  category4?: string;
}

export const headlineFont: fontState = {
  category1: 'text-[28px] font-bold leading-[32px]',
  category2: 'text-[24px] font-bold leading-[32px]',
  category3: 'text-[16px] font-bold leading-[32px]',
};

export const titleFont: fontState = {
  category1: 'text-[18px] font-semibold leading-[28px]',
  category2: 'text-[16px] font-bold leading-[28px]',
  category3: 'text-[14px] font-semibold leading-[20px]',
};

export const bodyFont: fontState = {
  category1: 'text-[18px] leading-[31px] font-medium',
  category2: 'text-[16px] leading-[28px] font-medium',
  category3: 'text-[14px] leading-[24px] font-medium',
};

export const captionFont: fontState = {
  category1: 'text-[28px] font-bold leading-[26px] font-medium',
  category2: 'text-[28px] font-bold leading-[22px] font-normal',
  category3: 'text-[28px] font-bold leading-[16px] font-medium',
  category4: 'text-[12px] font-medium leading-[14px] font-medium',
};

export const fontState = atom<fontState>({
  key: 'fontState',
  default: bodyFont,
});
