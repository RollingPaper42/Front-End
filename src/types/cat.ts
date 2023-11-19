export const catAction = {
  exit: 'exit',
  newContent: 'newContent',
  scroll: 'scroll',
  longText: 'longText',
  none: 'none',
};

export interface cat {
  catAction: typeof catAction;
  left: number;
  right: number;
}
