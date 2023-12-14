export const catAction = {
  sit: 'sit',
  none: 'none',
};

export interface catAnimation {
  src: string;
  catAction: string;
  y: number;
  x: number;
  width: number;
  height: number;
}

export const catAnimationDetail = {
  [catAction.sit]: {
    width: 35,
    height: 40,
    y: -58,
    x: -64,
  },
};
