export interface textThemeState {
  highlight: string;
  addRightCTA: string;
  writer: string;
  rightCTA: string;
}

export const nightText: textThemeState = {
  highlight: 'text-default-black',
  addRightCTA: 'text-default-black',
  rightCTA: 'text-night-highlight',
  writer: 'text-night-highlight',
};

export const peachText: textThemeState = {
  writer: 'text-peach-highlight',
  addRightCTA: 'text-default-black',
  highlight: 'text-default-black',
  rightCTA: 'text-peach-highlight',
};

export const lilacText: textThemeState = {
  writer: 'text-lilac-highlight',
  addRightCTA: 'text-default-black',
  highlight: 'text-default-black',
  rightCTA: 'text-lilac-highlight',
};

export const chrisText: textThemeState = {
  writer: 'text-chris-highlight',
  addRightCTA: 'text-default-white',
  highlight: 'text-default-white',
  rightCTA: 'text-default-white',
};

export const masText: textThemeState = {
  writer: 'text-mas-highlight',
  addRightCTA: 'text-default-white',
  highlight: 'text-default-white',
  rightCTA: 'text-default-white',
};

export const noneText: textThemeState = {
  writer: '',
  addRightCTA: '',
  highlight: '',
  rightCTA: '',
};
