export const catAction = {
  exit: 'exit',
  newContent: 'newContent',
  scroll: 'scroll',
  longText: 'longText',
  none: 'none',
};

export interface cat {
  catAction: string;
  top: number;
  left: number;
  width: number;
  height: number;
}
