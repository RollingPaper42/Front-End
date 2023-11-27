export const catAction = {
  exit: 'exit',
  newContent: 'newContent',
  longText: 'longText',
  sit: 'sit',
  none: 'none',
};

export interface cat {
  catAction: string;
  top: number;
  left: number;
  width: number;
  height: number;
}
