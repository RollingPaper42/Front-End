export const catAction = {
  in: 'in',
  out: 'out',
  sit: 'sit',
  leftWall: 'leftWall',
  rightWall: 'rightWall',
  none: 'none',
};

export interface catAnimation {
  src: string;
  catAction: string;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

export const catAnimationDetail = {
  [catAction.out]: {
    width: 114,
    height: 40,
    bottom: 8,
    left: 0,
  },
  [catAction.sit]: {
    width: 40,
    height: 40,
    bottom: 40,
    left: 200,
  },
};
