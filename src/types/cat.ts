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
