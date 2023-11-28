export const catAction = {
  exit: 'exit',
  newContent: 'newContent',
  longText: 'longText',
  sit: 'sit',
  none: 'none',
};

export interface cat {
  src: string;
  catAction: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

export const catAnimationDetail = {
  [catAction.exit]: {
    src: '/cats/exit.gif',
    width: 114,
    height: 40,
    top: 8,
    left: 0,
  },
  [catAction.sit]: {
    src: '/cats/sit.gif',
    width: 40,
    height: 40,
    top: -40,
    left: 200,
  },
};
